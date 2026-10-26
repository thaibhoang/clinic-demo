import React from 'react';

// High-fidelity SVG portraits with gradients, depth, realistic smiling expressions, and dental precision

export const DoctorThaiPortrait: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drThaiBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F766E" />
        <stop offset="50%" stopColor="#115E59" />
        <stop offset="100%" stopColor="#134E4A" />
      </linearGradient>
      <linearGradient id="skinThai" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDDFC7" />
        <stop offset="100%" stopColor="#F6C3A3" />
      </linearGradient>
      <linearGradient id="coatThai" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="scrubThai" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0D9488" />
        <stop offset="100%" stopColor="#0F766E" />
      </linearGradient>
      <linearGradient id="hairThai" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#1A202C" />
      </linearGradient>
    </defs>
    {/* Studio Background */}
    <rect width="400" height="400" fill="url(#drThaiBg)" />
    <circle cx="200" cy="190" r="140" fill="#14B8A6" opacity="0.15" />
    <circle cx="340" cy="70" r="80" fill="#2DD4BF" opacity="0.08" />

    {/* Medical Coat & Shoulders */}
    <path d="M70 400 C80 320 120 280 160 270 L240 270 C280 280 320 320 330 400 Z" fill="url(#coatThai)" />
    <path d="M165 270 L200 370 L235 270 Z" fill="url(#scrubThai)" />
    {/* Stethoscope around neck */}
    <path d="M140 275 C140 330 165 370 195 375" fill="none" stroke="#64748B" strokeWidth="8" strokeLinecap="round" />
    <path d="M260 275 C260 330 235 370 205 375" fill="none" stroke="#64748B" strokeWidth="8" strokeLinecap="round" />
    <circle cx="200" cy="380" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
    <circle cx="200" cy="380" r="6" fill="#0D9488" />

    {/* Coat Lapels */}
    <path d="M140 270 L175 350 L160 400 L80 400 Z" fill="#F8FAFC" />
    <path d="M260 270 L225 350 L240 400 L320 400 Z" fill="#F1F5F9" />

    {/* Neck */}
    <rect x="175" y="215" width="50" height="65" rx="8" fill="url(#skinThai)" />
    <path d="M175 240 C190 260 210 260 225 240 Z" fill="#E8B08E" opacity="0.4" />

    {/* Head & Face */}
    <ellipse cx="200" cy="175" rx="62" ry="72" fill="url(#skinThai)" />

    {/* Hair */}
    <path d="M136 160 C134 110 160 90 200 90 C240 90 266 110 264 160 C258 140 240 120 200 120 C160 120 142 140 136 160 Z" fill="url(#hairThai)" />
    <path d="M136 160 C130 180 132 190 136 195 C140 180 142 170 145 160 Z" fill="url(#hairThai)" />
    <path d="M264 160 C270 180 268 190 264 195 C260 180 258 170 255 160 Z" fill="url(#hairThai)" />

    {/* Ears */}
    <ellipse cx="137" cy="180" rx="9" ry="16" fill="url(#skinThai)" />
    <ellipse cx="263" cy="180" rx="9" ry="16" fill="url(#skinThai)" />

    {/* Glasses Frame (Modern Titanium) */}
    <rect x="150" y="152" width="40" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="3.5" />
    <rect x="210" y="152" width="40" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="3.5" />
    <line x1="190" y1="162" x2="210" y2="162" stroke="#334155" strokeWidth="3.5" />
    <line x1="138" y1="158" x2="150" y2="160" stroke="#334155" strokeWidth="3" />
    <line x1="250" y1="160" x2="262" y2="158" stroke="#334155" strokeWidth="3" />

    {/* Eyes & Eyebrows */}
    <path d="M152 142 Q170 138 188 144" fill="none" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M212 144 Q230 138 248 142" fill="none" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
    <ellipse cx="170" cy="165" rx="5" ry="5.5" fill="#1E293B" />
    <ellipse cx="230" cy="165" rx="5" ry="5.5" fill="#1E293B" />
    <circle cx="172" cy="163" r="1.5" fill="#FFFFFF" />
    <circle cx="232" cy="163" r="1.5" fill="#FFFFFF" />

    {/* Nose */}
    <path d="M198 162 L196 188 Q200 193 204 188" fill="none" stroke="#DE9B75" strokeWidth="2.5" strokeLinecap="round" />

    {/* Warm Friendly Smile with Bright Healthy Teeth */}
    <path d="M172 206 Q200 228 228 206 Z" fill="#B91C1C" />
    {/* Upper row of bright teeth */}
    <path d="M175 207 Q200 216 225 207 L223 214 Q200 222 177 214 Z" fill="#FFFFFF" />
    {/* Subtle teeth separations */}
    <line x1="192" y1="208" x2="192" y2="215" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="200" y1="208" x2="200" y2="216" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="208" y1="208" x2="208" y2="215" stroke="#CBD5E1" strokeWidth="0.8" />
    <path d="M168 203 Q200 236 232 203" fill="none" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" />

    {/* Cheerful eye crinkles */}
    <path d="M142 165 Q145 168 146 172" fill="none" stroke="#DE9B75" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M258 165 Q255 168 254 172" fill="none" stroke="#DE9B75" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DoctorChiPortrait: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drChiBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="50%" stopColor="#0D9488" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="skinChi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE4D6" />
        <stop offset="100%" stopColor="#F8CBB6" />
      </linearGradient>
      <linearGradient id="hairChi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#262626" />
        <stop offset="100%" stopColor="#171717" />
      </linearGradient>
    </defs>
    {/* Studio Background */}
    <rect width="400" height="400" fill="url(#drChiBg)" />
    <circle cx="200" cy="180" r="130" fill="#5EEAD4" opacity="0.12" />

    {/* Long Elegant Hair behind shoulders */}
    <path d="M120 180 C110 260 120 340 140 380 L260 380 C280 340 290 260 280 180 Z" fill="url(#hairChi)" />

    {/* Medical Coat & Shoulders */}
    <path d="M80 400 C90 320 130 280 165 270 L235 270 C270 280 310 320 320 400 Z" fill="#FFFFFF" />
    <path d="M165 270 L200 360 L235 270 Z" fill="#0D9488" />
    {/* Elegant Pearl Necklace / Stethoscope line */}
    <path d="M170 265 Q200 295 230 265" fill="none" stroke="#E2E8F0" strokeWidth="4" />
    <circle cx="200" cy="292" r="5" fill="#38BDF8" />

    {/* Coat Lapels */}
    <path d="M150 270 L180 340 L165 400 L85 400 Z" fill="#F8FAFC" />
    <path d="M250 270 L220 340 L235 400 L315 400 Z" fill="#F1F5F9" />

    {/* Neck */}
    <rect x="178" y="215" width="44" height="60" rx="8" fill="url(#skinChi)" />
    <path d="M178 245 C190 260 210 260 222 245 Z" fill="#E8B08E" opacity="0.3" />

    {/* Face */}
    <ellipse cx="200" cy="175" rx="56" ry="68" fill="url(#skinChi)" />

    {/* Soft Cheeks */}
    <circle cx="165" cy="190" r="14" fill="#FDA4AF" opacity="0.4" />
    <circle cx="235" cy="190" r="14" fill="#FDA4AF" opacity="0.4" />

    {/* Hair front / Styling */}
    <path d="M142 165 C140 100 170 85 200 85 C230 85 260 100 258 165 C246 125 220 115 200 115 C180 115 154 125 142 165 Z" fill="url(#hairChi)" />
    <path d="M142 165 C136 195 138 230 148 260 C154 220 156 185 158 160 Z" fill="url(#hairChi)" />
    <path d="M258 165 C264 195 262 230 252 260 C246 220 244 185 242 160 Z" fill="url(#hairChi)" />

    {/* Ears */}
    <ellipse cx="143" cy="180" rx="7" ry="14" fill="url(#skinChi)" />
    <ellipse cx="257" cy="180" rx="7" ry="14" fill="url(#skinChi)" />
    <circle cx="142" cy="188" r="3" fill="#FDE047" />
    <circle cx="258" cy="188" r="3" fill="#FDE047" />

    {/* Eyebrows */}
    <path d="M160 148 Q174 142 188 147" fill="none" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M212 147 Q226 142 240 148" fill="none" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" />

    {/* Eyes */}
    <ellipse cx="174" cy="164" rx="5" ry="6" fill="#1C1917" />
    <ellipse cx="226" cy="164" rx="5" ry="6" fill="#1C1917" />
    <circle cx="176" cy="162" r="1.8" fill="#FFFFFF" />
    <circle cx="228" cy="162" r="1.8" fill="#FFFFFF" />
    {/* Eyeliner */}
    <path d="M166 160 Q174 156 184 162" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <path d="M216 162 Q226 156 234 160" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

    {/* Nose */}
    <path d="M198 165 L197 185 Q200 188 203 185" fill="none" stroke="#E29D7D" strokeWidth="2" strokeLinecap="round" />

    {/* Luminous, Radiant Doctor Smile */}
    <path d="M174 204 Q200 226 226 204 Z" fill="#DC2626" />
    {/* Beautiful aligned white teeth */}
    <path d="M176 205 Q200 214 224 205 L222 212 Q200 220 178 212 Z" fill="#FFFFFF" />
    <line x1="192" y1="206" x2="192" y2="213" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="200" y1="206" x2="200" y2="214" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="208" y1="206" x2="208" y2="213" stroke="#CBD5E1" strokeWidth="0.8" />
    <path d="M170 202 Q200 234 230 202" fill="none" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DoctorVuPortrait: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drVuBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0E7490" />
        <stop offset="50%" stopColor="#155E75" />
        <stop offset="100%" stopColor="#164E63" />
      </linearGradient>
      <linearGradient id="skinVu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBD7C0" />
        <stop offset="100%" stopColor="#EEBC9B" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#drVuBg)" />
    <circle cx="200" cy="180" r="140" fill="#38BDF8" opacity="0.12" />

    {/* Coat */}
    <path d="M70 400 C80 320 120 280 160 270 L240 270 C280 280 320 320 330 400 Z" fill="#FFFFFF" />
    <path d="M165 270 L200 370 L235 270 Z" fill="#0284C7" />
    <path d="M140 270 L175 350 L160 400 L80 400 Z" fill="#F8FAFC" />
    <path d="M260 270 L225 350 L240 400 L320 400 Z" fill="#F1F5F9" />

    {/* Neck */}
    <rect x="175" y="215" width="50" height="65" rx="8" fill="url(#skinVu)" />

    {/* Head & Face */}
    <ellipse cx="200" cy="175" rx="60" ry="70" fill="url(#skinVu)" />

    {/* Short Hair */}
    <path d="M138 155 C136 100 164 85 200 85 C236 85 264 100 262 155 C256 130 240 115 200 115 C160 115 144 130 138 155 Z" fill="#1E293B" />

    {/* Ears */}
    <ellipse cx="138" cy="180" rx="8" ry="16" fill="url(#skinVu)" />
    <ellipse cx="262" cy="180" rx="8" ry="16" fill="url(#skinVu)" />

    {/* Eyes & Eyebrows */}
    <path d="M154 145 Q170 140 186 145" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
    <path d="M214 145 Q230 140 246 145" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="170" cy="166" rx="5" ry="5.5" fill="#1E293B" />
    <ellipse cx="230" cy="166" rx="5" ry="5.5" fill="#1E293B" />
    <circle cx="172" cy="164" r="1.5" fill="#FFFFFF" />
    <circle cx="232" cy="164" r="1.5" fill="#FFFFFF" />

    {/* Nose */}
    <path d="M198 163 L196 188 Q200 192 204 188" fill="none" stroke="#D98A62" strokeWidth="2.5" strokeLinecap="round" />

    {/* Warm Reassuring Smile */}
    <path d="M174 206 Q200 228 226 206 Z" fill="#991B1B" />
    <path d="M176 207 Q200 216 224 207 L222 214 Q200 222 178 214 Z" fill="#FFFFFF" />
    <line x1="192" y1="208" x2="192" y2="215" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="200" y1="208" x2="200" y2="216" stroke="#CBD5E1" strokeWidth="0.8" />
    <line x1="208" y1="208" x2="208" y2="215" stroke="#CBD5E1" strokeWidth="0.8" />
    <path d="M170 204 Q200 234 230 204" fill="none" stroke="#7F1D1D" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// High-fidelity Happy Client Smiling with Bright White Teeth
export const CustomerRadiantSmileHero: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 600 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroSmileBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0FDFA" />
        <stop offset="50%" stopColor="#E6FFFA" />
        <stop offset="100%" stopColor="#CCFBF1" />
      </linearGradient>
      <linearGradient id="teethGleam" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#EDF2F7" />
      </linearGradient>
      <linearGradient id="lipGloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="50%" stopColor="#E11D48" />
        <stop offset="100%" stopColor="#BE123C" />
      </linearGradient>
      <linearGradient id="clientSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF1EB" />
        <stop offset="60%" stopColor="#FDE1D3" />
        <stop offset="100%" stopColor="#F8CBB6" />
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background Atmosphere */}
    <rect width="600" height="500" rx="24" fill="url(#heroSmileBg)" />
    <circle cx="500" cy="100" r="160" fill="#2DD4BF" opacity="0.15" />
    <circle cx="100" cy="400" r="140" fill="#99F6E4" opacity="0.2" />

    {/* Modern architectural clinic interior window lines */}
    <path d="M0 120 L600 80" stroke="#0D9488" strokeWidth="1" strokeDasharray="6 8" opacity="0.2" />
    <path d="M0 240 L600 200" stroke="#0D9488" strokeWidth="1" strokeDasharray="6 8" opacity="0.15" />

    {/* Client Hair background */}
    <path d="M160 220 C140 340 150 460 170 500 L430 500 C450 460 460 340 440 220 Z" fill="#1C1917" />

    {/* Shoulders / Clean modern knit sweater */}
    <path d="M120 500 C140 410 190 370 250 360 L350 360 C410 370 460 410 480 500 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
    <path d="M250 360 C270 385 330 385 350 360" fill="#0D9488" opacity="0.1" />

    {/* Neck */}
    <rect x="270" y="300" width="60" height="70" rx="12" fill="url(#clientSkin)" />
    <ellipse cx="300" cy="330" rx="18" ry="4" fill="#E8B08E" opacity="0.3" />

    {/* Radiant Face */}
    <ellipse cx="300" cy="230" rx="90" ry="110" fill="url(#clientSkin)" />

    {/* Soft Blush Cheeks */}
    <circle cx="235" cy="250" r="24" fill="#FB7185" opacity="0.35" filter="url(#softGlow)" />
    <circle cx="365" cy="250" r="24" fill="#FB7185" opacity="0.35" filter="url(#softGlow)" />

    {/* Front Hair framing face with soft natural waves */}
    <path d="M210 200 C200 110 250 80 300 80 C350 80 400 110 390 200 C370 140 330 120 300 120 C270 120 230 140 210 200 Z" fill="#292524" />
    <path d="M210 200 C195 240 195 300 215 360 C230 310 230 250 228 200 Z" fill="#1C1917" />
    <path d="M390 200 C405 240 405 300 385 360 C370 310 370 250 372 200 Z" fill="#1C1917" />

    {/* Ears & Pearls */}
    <ellipse cx="208" cy="240" rx="9" ry="18" fill="url(#clientSkin)" />
    <ellipse cx="392" cy="240" rx="9" ry="18" fill="url(#clientSkin)" />
    <circle cx="206" cy="252" r="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
    <circle cx="394" cy="252" r="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />

    {/* Eyebrows */}
    <path d="M235 185 Q260 176 280 184" fill="none" stroke="#292524" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M320 184 Q340 176 365 185" fill="none" stroke="#292524" strokeWidth="3.5" strokeLinecap="round" />

    {/* Happy, Joyful Sparkling Eyes */}
    <ellipse cx="258" cy="208" rx="8" ry="9" fill="#1C1917" />
    <ellipse cx="342" cy="208" rx="8" ry="9" fill="#1C1917" />
    <circle cx="261" cy="205" r="3" fill="#FFFFFF" />
    <circle cx="345" cy="205" r="3" fill="#FFFFFF" />
    <circle cx="256" cy="211" r="1.5" fill="#FFFFFF" />
    <circle cx="340" cy="211" r="1.5" fill="#FFFFFF" />
    {/* Eyelashes & Cheerful Smile Crinkles */}
    <path d="M245 204 Q258 196 272 204" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M328 204 Q342 196 355 204" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M240 212 Q244 216 245 220" fill="none" stroke="#DE9B75" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M360 212 Q356 216 355 220" fill="none" stroke="#DE9B75" strokeWidth="1.8" strokeLinecap="round" />

    {/* Nose */}
    <path d="M298 206 L295 240 Q300 245 305 240" fill="none" stroke="#DE9B75" strokeWidth="2.5" strokeLinecap="round" />

    {/* ============================================================ */}
    {/* RADIANT CONFIDENT SMILE WITH SPARKLING WHITE HEALTHY TEETH */}
    {/* ============================================================ */}
    {/* Outer Lip Arch */}
    <path d="M242 268 Q300 312 358 268 Q300 286 242 268 Z" fill="url(#lipGloss)" />

    {/* Mouth Interior Dark Shadow */}
    <path d="M248 271 Q300 306 352 271 Q300 284 248 271 Z" fill="#881337" />

    {/* Upper Row of Radiant White Teeth (Perfect Arch) */}
    <path
      d="M250 272 Q300 286 350 272 L347 284 Q300 299 253 284 Z"
      fill="url(#teethGleam)"
      stroke="#CBD5E1"
      strokeWidth="0.8"
    />

    {/* Individual Teeth Definitions & Enamel Reflections */}
    {/* Central Incisors (Răng cửa giữa - symmetrical, luminous) */}
    <path d="M293 274 L293 293 Q300 294 300 275 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.6" />
    <path d="M300 275 Q300 294 307 293 L307 274 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.6" />
    {/* Lateral Incisors */}
    <path d="M285 274 L285 290 Q293 291 293 274 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
    <path d="M307 274 Q307 291 315 290 L315 274 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
    {/* Canines */}
    <path d="M276 273 L276 287 Q285 289 285 274 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.6" />
    <path d="M315 274 Q315 289 324 287 L324 273 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.6" />
    {/* Premolars */}
    <path d="M266 273 L266 283 Q276 286 276 273 Z" fill="#E2E8F0" opacity="0.9" />
    <path d="M324 273 Q324 286 334 283 L334 273 Z" fill="#E2E8F0" opacity="0.9" />

    {/* White Enamel Sparkle / Shine star on teeth */}
    <g transform="translate(305, 276)">
      <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#FFFFFF" />
      <circle cx="0" cy="0" r="1.5" fill="#5EEAD4" />
    </g>
    <g transform="translate(288, 278)">
      <path d="M0 -4 L1 -1 L4 0 L1 1 L0 4 L-1 1 L-4 0 L-1 -1 Z" fill="#FFFFFF" opacity="0.9" />
    </g>

    {/* Lower Lip fullness and sheen */}
    <path d="M246 276 Q300 326 354 276 Q300 312 246 276 Z" fill="url(#lipGloss)" />
    <path d="M275 295 Q300 306 325 295" fill="none" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

    {/* Floating Trust Metric Badges */}
    {/* Top Right: Clinically verified */}
    <g transform="translate(410, 40)">
      <rect width="165" height="52" rx="14" fill="#FFFFFF" stroke="#0D9488" strokeWidth="1.5" filter="url(#softGlow)" />
      <circle cx="28" cy="26" r="14" fill="#CCFBF1" />
      <path d="M22 26 L26 30 L34 21" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="50" y="22" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#0F766E">100% RĂNG THẬT</text>
      <text x="50" y="38" fontFamily="sans-serif" fontSize="10" fill="#64748B">Bảo tồn sinh học 99%</text>
    </g>

    {/* Bottom Left: Before/After badge */}
    <g transform="translate(25, 380)">
      <rect width="180" height="60" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#softGlow)" />
      <circle cx="32" cy="30" r="16" fill="#FEF3C7" />
      <text x="24" y="35" fontFamily="sans-serif" fontSize="14" fill="#D97706">✨</text>
      <text x="56" y="26" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#1E293B">Bật 6 Tông Trắng</text>
      <text x="56" y="44" fontFamily="sans-serif" fontSize="10" fill="#059669">Laser Philips Zoom Mỹ</text>
    </g>
  </svg>
);
