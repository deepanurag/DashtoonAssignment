export async function query(data) {
  var inputText = JSON.stringify(data);
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        "Accept": "image/png",
        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ inputs: inputText + " Draw in comic art style. Add text dailogue bubble." }),
    }
  );
  console.log(JSON.stringify(data) + " Draw in comic art style.");
  const result = await response.blob();
  const imageUrl = URL.createObjectURL(result);
  return imageUrl;
}
