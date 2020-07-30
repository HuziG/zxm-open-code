/*
 * @Author: your name
 * @Date: 2020-06-23 17:12:29
 * @LastEditTime: 2020-06-23 18:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /create_json/index.js
 */
window.onload = function () {
  let input = document.getElementById("exampleFormControlFile1");
  input.onchange = function () {
    const file = this.files[0];
    if (!!file) {
      const reader = new FileReader();
      reader.readAsText(file, "utf-8");
      reader.onload = function () {
        let tmp1 = this.result;
        tmp1 = JSON.parse(tmp1);

        let codeStr = "";

        for (key in tmp1) {
          let column = `\n<el-table-column prop="${key}" label="${tmp1[key]}"></el-table-column>`;
          codeStr += column;
        }
        
        // $("#code-wrap").html(codeStr)

        // tmp1 = JSON.parse(tmp1[0].dataStructureList[0].structureData);


        // tmp1.forEach((item) => {
        //   
        // });

        $("#code-wrap").html(
          codeStr.trim().replace(/</g, "&lt;").replace(/\n/g, "<br/>")
        );
      };
    }
  };
};

function copyCode() {
  navigator.clipboard
    .writeText(document.getElementById("code-wrap").innerText)
    .then(() => {
      $(".copy-alert").show();

      setTimeout(() => {
        $(".copy-alert").hide();
      }, 1500);
    });

  // Clipboard

  //   $(".copy-alert").fadeIn();

  //   setTimeout(() => {
  //     $(".copy-alert").fadeOut();
  //   }, 1500);
}
