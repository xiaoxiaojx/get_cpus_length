const fs = require("fs");
const os = require("os");

function readNumber(file) {
  return Number(fs.readFileSync(file, "utf-8"));
}

function getCpuLimits() {
  try {
    return (
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
