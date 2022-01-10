const vox = document.querySelectorAll('#vox path');

for (let i = 0; i < vox.length; i++) {
    let dim = `${ vox[i].getTotalLength() }`;
    console.log(dim);
    let edit = document.styleSheets[0];
    edit.insertRule(":root {--strokeDimension" + `${i}` + ":" + dim + ";}");

    let insert = document.styleSheets[0];
    insert.insertRule("#vox path:nth-child(" + `${i}` + ") {stroke-dasharray: --strokeDimension" + `${i}` + ";stroke-dashoffset: --strokeDimension" + `${i}` + "; animation: line-anim 7s ease forwards;}");
}

