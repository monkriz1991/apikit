import { ElMessage, ElMessageBox } from "element-plus";
export default defineNuxtPlugin(() => {
  const openDell = async () => {
    let popapData = {
      type: "info",
      message: "Удаление отменено",
    }
    let answer = await ElMessageBox.confirm("Удаление записи безвозратно!", "Внимание", {
      confirmButtonText: "Удалить",
      cancelButtonText: "Отмена",
      type: "warning",
    });
    if(answer)
      popapData = {
      type: "success",
      message: "Успешно удалена",
    }
    ElMessage(popapData)
    return answer
  };
  return {
    provide: {
      openDell,
    },
  };
});
