// ============================================================
// VERSION 1 — Liquid Glass (iOS-style)
// Real glass feel: refraction shimmer, subtle distortion,
// specular highlight on top edge, deep blur, soft shadow
// ============================================================

export default function LiquidGlass({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div className="relative max-w-4xl mx-auto px-4 py-8">
			{/* The glass surface */}
			<div
				className="relative rounded-3xl overflow-hidden"
				style={{
					/* Multi-layer background to simulate glass depth */
					background: `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.22) 0%,
              rgba(255,255,255,0.06) 40%,
              rgba(255,255,255,0.12) 100%
            )
          `,
					/* Deep blur = glass thickness illusion */
					backdropFilter:
						"blur(28px) saturate(180%) brightness(1.05)",
					WebkitBackdropFilter:
						"blur(28px) saturate(180%) brightness(1.05)",
					/* Layered box shadows: inner glow + outer depth */
					boxShadow: `
            0 0 0 1px rgba(255,255,255,0.30) inset,
            0 2px 0 0 rgba(255,255,255,0.55) inset,
            0 -1px 0 0 rgba(0,0,0,0.08) inset,
            0 8px 32px rgba(0,0,0,0.18),
            0 2px 8px rgba(0,0,0,0.10)
          `,
				}}
			>
				{/* Specular highlight — the "top glint" iOS glass has */}
				<div
					className="absolute top-0 left-0 right-0 h-px"
					style={{
						background:
							"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.9) 70%, transparent 100%)",
					}}
				/>

				{/* Subtle inner refraction gradient sweep */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `
              radial-gradient(
                ellipse 80% 40% at 50% 0%,
                rgba(255,255,255,0.15) 0%,
                transparent 70%
              )
            `,
					}}
				/>

				{/* Actual content sits above all effects */}
				<div className="relative z-10">
					{/* Content */}
					{children}
				</div>
			</div>
		</div>
	);
}
