import './Timeline/Timeline.css'

const Timeline = () => {
	return (
    <div>
			<div class="profile">
        <p>Maudy Ayunda</p>
        <div class ="circle"></div>
        <div class ="stats"></div>
        <div class ="stats2"></div>
			</div>
			<div class="timeline">
					<p>Timeline</p>
					<div class="garis"></div>
			</div>

			<div class="container">
					<div class="kotak">
							<div class="identitas">
									<p>Jerome Polin</p>
							</div>
							<p class="tanggal">1 Juni 2021</p>
							<p class="jam">10.30</p>
							<h2 class="judul">Menambahkan Prestasi Baru</h2>
							<div class="kotak_kecil">
									<h2>Juara 1 OSN Bidang Matematika Tingkat Kabupaten</h2>
									<p>Olimpiade Sains Nasional yang diselenggarakan oleh Dinas Pendidikan di SMA Negeri 1 Jakarta pada tanggal 24 April 2020</p>
							</div>
					</div>

					<div class="kotak">
							<div class="identitas">
									<p>Admin</p>
							</div>
							
							<p class="tanggal">1 Juni 2021</p>
							<p class="jam">10.30</p>
							<h2 class="judul">Bentar lagi ada lomba Olimpiade Sains Nasional, nih! Kalian udah siap belum?</h2>
							<div class="kotak_kecil">
									<h2>Juara 1 OSN Bidang Matematika Tingkat Kabupaten</h2>
									<p>Olimpiade Sains Nasional yang diselenggarakan oleh Dinas Pendidikan di SMA Negeri 1 Jakarta pada tanggal 24 April 2020</p>
							</div>
					</div>
			</div>
		</div>
	)
}

export default Timeline