import { DocumentReaderProcessor } from "/node_modules/@regulaforensics/vp-frontend-document-components/esm/main.js";
window.isProcessImageReady = false;

function processImage(file) {
  return new Promise(async (resolve, reject) => {
    const reader = new DocumentReaderProcessor();

    await reader.initialize({
      license:
        "AAEAAAw990PeJZjJEBzrgJRnpETwngdsgnQCLVTnb0w6lSWy1hK5+POUwmmDTd/ktmE5NTjqqpWmkaO/zjH//FkrmaB8dyJD4ycXwLRV5X8t4k0bbguC6+TXG3nWW6Xr6IZo8L+KWsgBfIVE9qV43QUk58elaE43FiX2IHbqt/isVbXfmm7kurglToXlvwDf78D9h0yiN1Sv6hPMukH/DmDyWOvIv3fEvbdfNuHS6AIE1QPm7ZAKsXVRnYhCsYhBQgyM2xX7SguIG8agbDqKnslNQZHIyUb/LskwxUXbxtmFWNethVCmUKy7+f2X/7ZpSWjMI3k/o4dd4/a/El7lbdGXlDYkAQAAAAAAEE18ps/F2AS2EP6Eu0pBlKQskoZkgqhWnNKXMIlr6fTU+kWFljCsCi/4UVF4Ws9AK/hCU6iQEbborqgnAVRWUyn1wNpz7QuvJuQ4Vnt5WWzjaDn2zynNdrjKauECJ1F0/rI0wspjpOfPVXiw6RiRMfS/dGHT+tCK5efhvKVrKKQ0Sfu7K8V8gRMfYNou1za/Q/GKVTjPn1WhcKYK8cR04GHE4phXqwb7lw+SpkYVLcP1MRR8M8/Tg8fMDG8BaKQNPXLmyOStyUi8OdUUYcRidCDe2bVDY1GtzCBq9n1wMReWySewzl8e3eolxf9uWToj3+a1onDkuzouuXatJpgSmRwVlsEUUqxRg8sLM9803c5ERlGi9dkOdkYxYmSNn2/V2Q==",
    });
    console.log("initialized");
    console.log("staring processing image");
    try {
      var dataurl = file;
      console.log("dataurl " + dataurl);
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var f = new File([u8arr], "passport2022.jpeg", { type: mime });
      try {
        const result = await reader.processImage([f]);

        console.log("res " + JSON.stringify(result));
        resolve(JSON.stringify(result));
      } catch (error) {
        reject("error1 " + error);
      }
    } catch (error) {
      reject("error " + error);
    }
  });
}
window.processImage = processImage;
window.isProcessImageReady = true;
