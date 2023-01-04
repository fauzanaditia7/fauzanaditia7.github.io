const contact_form = document.querySelector("#contact-form");
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
contact_form.addEventListener('submit', (e) => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    const name = document.querySelector("input#name");
    const pesan = document.querySelector("textarea#pesan");
    const email = document.querySelector("input#email");
    $.ajax({
        url: "https://q.fauzan-aditia.workers.dev/",
        dataType: 'json', contentType: "application/json", type: "POST",
        data: JSON.stringify({ name: name.value, pesan: pesan.value, email: email.value}),
        success: e => {
            tata.success("", "<strong>Terimakasih!</strong> Pesan anda sudah kami terima.");
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            contact_form.reset();
        },
        error: err => {
            console.error(err);
        }
    });
});