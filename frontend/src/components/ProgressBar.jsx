// components/ProgressBar.jsx
// export default function ProgressBar({ percent }) {
//   return (
//     <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
//       <div
//         className="bg-green-500 h-4 transition-all duration-300"
//         style={{ width: `${percent}%` }}
//       ></div>
//     </div>
//   );
// }



export default function ProgressBar({ percent }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-green-500 h-4 transition-all duration-300"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
