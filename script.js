// Fungsi untuk menampilkan konten di dalam accordion
function toggleAccordion(event, section) {
    const content = document.getElementById(section);
    if (content) {
        // Periksa apakah konten sudah ditampilkan
        const isOpen = content.classList.contains('show');

        // Tutup semua accordion-content kecuali yang sedang dipilih
        const accordions = document.getElementsByClassName('accordion-content');
        for (let i = 0; i < accordions.length; i++) {
            if (accordions[i].id !== section) {
                accordions[i].classList.remove('show');
            }
        }

        // Buka atau tutup accordion-content yang dipilih
        content.classList.toggle('show', !isOpen);
    }
}

// Buka secara otomatis Overview saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const overviewContent = document.getElementById('overview');
    if (overviewContent) {
        overviewContent.classList.add('show');
    }
});
