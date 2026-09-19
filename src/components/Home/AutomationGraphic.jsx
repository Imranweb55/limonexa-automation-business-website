// // Orbiting nodes representing connected business systems.
// // Positions are laid out on a circle around the central "AI" hub.
// const NODES = [
//   { label: 'CRM', angle: -55, radius: 168 },
//   { label: 'WhatsApp', angle: -12, radius: 190 },
//   { label: 'Employees', angle: 32, radius: 168 },
//   { label: 'Support', angle: 75, radius: 190 },
//   { label: 'Invoices', angle: 118, radius: 168 },
//   { label: 'Payments', angle: 162, radius: 190 },
//   { label: 'Sales', angle: -100, radius: 190 },
// ];

// function nodePosition(angleDeg, radius) {
//   const rad = (angleDeg * Math.PI) / 180;
//   return {
//     x: Math.cos(rad) * radius,
//     y: Math.sin(rad) * radius,
//   };
// }

// function AutomationGraphic() {
//   return (
//     <div
//       aria-hidden="true"
//       className="automation-graphic relative flex items-center justify-center w-[min(480px,90vw)] h-[min(480px,90vw)] scale-[var(--graphic-scale,1)] rotate-[var(--graphic-rotate,0deg)] transition-transform duration-200 ease-linear will-change-transform"
//     >
//       <div className="absolute rounded-full border border-brand-blue-pale/10 w-[92%] h-[92%] animate-ag-spin" />
//       <div className="absolute rounded-full border border-dashed border-brand-blue-pale/10 w-[62%] h-[62%] animate-ag-spin-reverse" />

//       <svg
//         className="absolute w-full h-full overflow-visible"
//         viewBox="-220 -220 440 440"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         {NODES.map((node, i) => {
//           const { x, y } = nodePosition(node.angle, node.radius);
//           return (
//             <line
//               key={node.label}
//               x1="0"
//               y1="0"
//               x2={x}
//               y2={y}
//               className="stroke-brand-blue-light [stroke-width:1] opacity-0 [stroke-dasharray:6_4] animate-ag-draw"
//               style={{
//                 animation: 'agDraw 1.2s cubic-bezier(0.16,1,0.3,1) forwards, agFlow 3.5s linear infinite',
//                 animationDelay: `${i * 0.15}s`,
//               }}
//             />
//           );
//         })}
//       </svg>

//       <div className="relative z-3 w-[118px] h-[118px] rounded-full flex items-center justify-center bg-[radial-gradient(circle_at_35%_30%,var(--color-brand-blue-light)_0%,var(--color-brand-blue)_60%,var(--color-brand-navy)_100%)] shadow-[0_0_0_1px_rgba(126,193,255,0.28)] animate-ag-pulse max-[640px]:w-[90px] max-[640px]:h-[90px]">
//         <span className="text-[30px] font-bold tracking-wider text-white max-[640px]:text-[22px]">AI</span>
//       </div>

//       {NODES.map((node, i) => {
//         const { x, y } = nodePosition(node.angle, node.radius);
//         return (
//           <div
//             key={node.label}
//             className="absolute z-2 flex flex-col items-center gap-1.5 opacity-0 animate-ag-appear"
//             style={{
//               transform: `translate(${x}px, ${y}px)`,
//               animationDelay: `${i * 0.25}s`,
//             }}
//           >
//             <span className="w-[46px] h-[46px] rounded-full bg-bg-elevated border border-brand-blue-pale/28 shadow-[0_0_22px_rgba(7,100,192,0.28)] animate-ag-float max-[640px]:w-9 max-[640px]:h-9" />
//             <span className="text-[11.5px] font-medium text-text-secondary whitespace-nowrap tracking-wide max-[640px]:hidden">
//               {node.label}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default AutomationGraphic;
