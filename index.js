const fs = require("fs");
const os = require("os");

function readNumber(file) {
  return Number(fs.readFileSync(file, "utf-8"));
}

// @xiaoxiaojx
// Reference solution for go-lang https://github.com/uber-go/automaxprocs
function getCpuLimits() {
  try {
    return (
      // @xiaoxiaojx
      // 仅针对于使用 CFS 调度策略的实例 https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt
      // cfs.cpu_period_us 文件记录了调度周期，单位是 us；默认值一般是 100’000，即 100 ms
      // cfs.cpu_quota_us 记录了每个调度周期进程允许使用 cpu 的量，单位也是 us。值为 -1 表示无限制；对于 4C 的容器，这个值一般是 400’000
      readNumber("/sys/fs/cgroup/cpu/cpu.cfs_quota_us") /
      readNumber("/sys/fs/cgroup/cpu/cpu.cfs_period_us")
    );
  } catch (err) {
    return 0;
  }
}

module.exports = () => {
  return getCpuLimits() || os.cpus().length;
};
