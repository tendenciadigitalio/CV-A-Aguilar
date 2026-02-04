import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
    uniform float uTime;
    uniform float uDistortion;
    uniform float uSize;
    uniform vec2 uMouse;
    varying float vNoise;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        i = mod289(i);
        vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
        vec3 pos = position;
        float noise = snoise(vec3(pos.x * 0.5 + uTime * 0.15, pos.y * 0.5, pos.z * 0.5));
        vNoise = noise;
        vec3 newPos = pos + (normal * noise * uDistortion);
        
        float dist = distance(uMouse * 10.0, newPos.xy);
        float interaction = smoothstep(10.0, 0.0, dist);
        newPos.z += interaction * 4.0;

        vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = uSize * (20.0 / -mvPosition.z);
    }
`;

const fragmentShader = `
    uniform vec3 uColor;
    varying float vNoise;
    void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        if (dist > 0.45) discard;
        
        vec3 color2 = vec3(0.0, 0.0, 0.0);
        vec3 finalColor = mix(uColor, color2, vNoise * 0.5 + 0.5);
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;

const AuraCube = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const clock = new THREE.Clock();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 0, 20);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const objectGroup = new THREE.Group();
        scene.add(objectGroup);

        const geometry = new THREE.BoxGeometry(10, 10, 10, 60, 60, 60);
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 1.2 },
            uSize: { value: 3.5 },
            uColor: { value: new THREE.Color('#333333') },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: uniforms,
            transparent: true
        });

        const points = new THREE.Points(geometry, material);
        objectGroup.add(points);

        let mouseX = 0, mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        };

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        const animate = () => {
            const time = clock.getElapsedTime();
            uniforms.uTime.value = time;

            uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
            uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;

            objectGroup.rotation.y = time * 0.5;
            objectGroup.rotation.z = time * 0.25;

            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.setAnimationLoop(null);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center overflow-hidden" />;
};

export default AuraCube;
