export const FireflyVertexShader = `
uniform float uTime;
uniform float uSize;
attribute float aPhase;
attribute float aYBase;

void main() {
  vec3 pos = position;
  float yOffset = sin(uTime * 1.5 + aPhase) * 0.4; 
  pos.y = aYBase + yOffset;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  gl_PointSize = uSize * (30.0 / -mvPosition.z);
}
`

export const FireflyFragmentShader = `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;

void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  
  float dist = max(abs(p.x), abs(p.y));
  float isCore = step(dist, 0.1); 
  float isBody = step(dist, 0.25); 
  float isGlow = step(dist, 0.5);

  if (isGlow < 0.1) discard;

  vec3 finalColor = uColor;
  float finalAlpha = uOpacity * 0.2; 

  if (isBody > 0.5) {
    finalAlpha = uOpacity * 0.8; 
  }

  if (isCore > 0.5) {
    finalColor = mix(uColor, vec3(1.0, 1.0, 1.0), 0.9); 
    finalAlpha = uOpacity; 
  }

  float blink = sin(uTime * 4.0 + gl_FragCoord.x * 0.1);
  float steppedBlink = smoothstep(-0.2, 0.2, blink);
  float intensity = 0.7 + 0.3 * steppedBlink;

  gl_FragColor = vec4(finalColor, finalAlpha * intensity);
}
`

export const LightningVertexShader = `
uniform float uTime;
attribute float aT; // 0.0 at start, 1.0 at end of link

void main() {
    vec3 pos = position;
    
    // Create jagged effect using uTime and position
    if (aT > 0.0 && aT < 1.0) {
        float noiseX = sin(uTime * 15.0 + position.y * 10.0 + position.z * 5.0) * 0.1;
        float noiseZ = cos(uTime * 12.0 + position.x * 10.0 + position.y * 5.0) * 0.1;
        float edgeWeight = sin(aT * 3.14159);
        pos.x += noiseX * edgeWeight;
        pos.z += noiseZ * edgeWeight;
        pos.y += (sin(uTime * 20.0) * 0.05) * edgeWeight;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`

export const LightningFragmentShader = `
uniform vec3 uColor;
uniform float uTime;

void main() {
    // Flickering core effect
    float flicker = sin(uTime * 30.0) * 0.5 + 0.5;
    float alpha = 0.6 + 0.4 * flicker;
    
    // Core white, outer colored glow
    vec3 finalColor = mix(uColor, vec3(1.0, 1.0, 1.0), 0.7);
    
    gl_FragColor = vec4(finalColor, alpha);
}
`
