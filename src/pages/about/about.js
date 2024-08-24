function downloadCv() {
    let link = document.createElement("a");
    link.download = "juanmartinscaitano_cv";
    link.href = "../../../assets/juan_curriculo.pdf";
    link.click();
    link.remove();
    
}

// fetch("../../../assets/banner_bambushop.pdf").then(console.log)