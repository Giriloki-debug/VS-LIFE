
// import { Gauge, CircleCheck, Clock } from "lucide-react";

// export default function ProgressStatisticsCard() {
//   const inProgress = 8;
//   const completed = 12;
//   const upcoming = 14;
//   const totalTasks = inProgress + completed + upcoming;
//   const completionPercent = Math.round((completed / totalTasks) * 100);

//   return (
//     <div className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold text-gray-700">Progress statistics</h2>

//       <div className="mt-4 text-4xl font-bold text-gray-900">{completionPercent}%</div>
//       <div className="text-sm text-gray-400 mb-4">Total activity</div>

//       <div className="flex h-2 rounded-full overflow-hidden mb-6">
//         <div className="bg-purple-500" style={{ width: `${(inProgress / totalTasks) * 100}%` }}></div>
//         <div className="bg-green-500" style={{ width: `${(completed / totalTasks) * 100}%` }}></div>
//         <div className="bg-orange-400" style={{ width: `${(upcoming / totalTasks) * 100}%` }}></div>
//       </div>

//       <div className="flex justify-between text-sm text-gray-500 px-1 mb-4">
//         <span>{Math.round((inProgress / totalTasks) * 100)}%</span>
//         <span>{Math.round((completed / totalTasks) * 100)}%</span>
//         <span>{Math.round((upcoming / totalTasks) * 100)}%</span>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="flex flex-col items-center">
//           <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
//             <Clock className="w-5 h-5" />
//           </div>
//           <div className="text-xl font-semibold mt-2">{inProgress}</div>
//           <div className="text-sm text-gray-500">In progress</div>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="bg-green-100 text-green-600 p-3 rounded-full">
//             <CircleCheck className="w-5 h-5" />
//           </div>
//           <div className="text-xl font-semibold mt-2">{completed}</div>
//           <div className="text-sm text-gray-500">Completed</div>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
//             <Gauge className="w-5 h-5" />
//           </div>
//           <div className="text-xl font-semibold mt-2">{upcoming}</div>
//           <div className="text-sm text-gray-500">Upcoming</div>
//         </div>
//       </div>
//     </div>
//   );
// }