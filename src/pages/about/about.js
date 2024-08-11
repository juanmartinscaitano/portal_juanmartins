function downloadCv() {
    let link = document.createElement("a");
    link.download = "juanmartinscaitano_cv";
    link.href = "./assets/banner_bambushop.pdf";
    link.click();
    link.remove();
}