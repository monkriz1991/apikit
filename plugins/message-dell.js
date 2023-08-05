import { ElMessage, ElMessageBox } from "element-plus";
export default defineNuxtPlugin(() => {
  const openDell = () => {
    ElMessageBox.confirm("Удаление записи безвозратно!", "Внимание", {
      confirmButtonText: "Удалить",
      cancelButtonText: "Отмена",
      type: "warning",
    })
      .then(() => {
        ElMessage({
          type: "success",
          message: "Успешно удалена",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "Удаление отменено",
        });
      });
  };
  return {
    provide: {
      openDell,
    },
  };
});
