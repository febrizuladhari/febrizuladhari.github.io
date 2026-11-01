/* Sumber: audit_report.txt + plot audit skripsi. Ubah angka di sini jika ada revisi.
   Metrik dalam persen; F1 per kelas dalam skala 0-1. */
window.SKRIPSI_DATA = {
   distLabels: ["<0.5", "0.5–0.6", "0.6–0.7", "0.7–0.8", "0.8–0.9", "0.9–<1.0", "1.00"],
   categories: ["Bayi & Menyusui", "Gizi & Nutrisi", "KB & Kontrasepsi", "Keguguran & Pendarahan", "Kehamilan", "Kesehatan Mental & Emosional", "Komplikasi & Darurat", "Lainnya", "Nifas & Pascapersalinan", "Persalinan"],
   models: [
      {
         name: "NusaBERT-base", encoder: "LazarusNLP/NusaBERT-base", pretrain: "MLM + 16B tokens", pooling: "Mean",
         acc: 87.29, prec: 87.95, rec: 87.41, f1: 87.40, testLoss: 1.1013, bestValF1: 86.747, bestEpoch: 24, epochs: 30, gap: 13.29, impr5: 0.0190, std10: 0.0809, valLossMin: 1.1459, valLossFinal: 1.1469,
         f1min: 0.4706, below50: 1, perfect: 20, dist: [1, 7, 13, 43, 181, 173, 20], cat: [0.95, 0.86, 0.95, 0.92, 0.94, 0.83, 0.87, 0.93, 0.83, 0.93],
         low: [["Pengertian, Gejala, dan Penyebab Keguguran", 0.727, 0.348, 0.4706], ["Perubahan Fisik dan Emosional Selama Kehamilan", 0.625, 0.435, 0.5128], ["Panduan Pola Makan dan Nutrisi Sehari-hari Ibu Hamil", 0.500, 0.583, 0.5385], ["Tanda dan Gejala Persalinan Prematur", 0.545, 0.545, 0.5455], ["Memahami dan Menangani Pendarahan Saat Hamil", 0.556, 0.556, 0.5556]]
      },
      {
         name: "IndoBERT-base-p1", encoder: "indobenchmark/indobert-base-p1", pretrain: "MLM only", pooling: "Mean",
         acc: 87.23, prec: 87.77, rec: 87.35, f1: 87.30, testLoss: 1.1382, bestValF1: 86.192, bestEpoch: 25, epochs: 30, gap: 13.92, impr5: -0.0225, std10: 0.0812, valLossMin: 1.1993, valLossFinal: 1.2050,
         f1min: 0.4737, below50: 2, perfect: 19, dist: [2, 5, 5, 55, 191, 161, 19], cat: [0.95, 0.88, 0.96, 0.92, 0.93, 0.83, 0.88, 0.93, 0.83, 0.92],
         low: [["Perubahan Fisik dan Emosional Selama Kehamilan", 0.600, 0.391, 0.4737], ["Pengertian, Gejala, dan Penyebab Keguguran", 0.526, 0.435, 0.4762], ["Memahami dan Menangani Pendarahan Saat Hamil", 0.500, 0.518, 0.5091], ["Panduan Pola Makan dan Nutrisi Sehari-hari Ibu Hamil", 0.513, 0.528, 0.5205], ["Tanda-Tanda Awal Persalinan dan Sumbatan Lendir", 0.714, 0.455, 0.5556]]
      },
      {
         name: "IndoBERT-base-p2", encoder: "indobenchmark/indobert-base-p2", pretrain: "MLM + NSP", pooling: "[CLS]",
         acc: 86.91, prec: 87.46, rec: 87.02, f1: 86.98, testLoss: 1.1656, bestValF1: 86.458, bestEpoch: 28, epochs: 30, gap: 13.59, impr5: 0.0107, std10: 0.0588, valLossMin: 1.2020, valLossFinal: 1.2051,
         f1min: 0.4444, below50: 3, perfect: 22, dist: [3, 2, 11, 62, 186, 152, 22], cat: [0.95, 0.88, 0.94, 0.93, 0.93, 0.84, 0.87, 0.93, 0.87, 0.92],
         low: [["Perubahan Fisik dan Emosional Selama Kehamilan", 0.615, 0.348, 0.4444], ["Pengertian, Gejala, dan Penyebab Keguguran", 0.529, 0.391, 0.4500], ["Memahami dan Menangani Pendarahan Saat Hamil", 0.545, 0.444, 0.4898], ["Panduan Pola Makan dan Nutrisi Sehari-hari Ibu Hamil", 0.513, 0.556, 0.5333], ["Pendarahan Awal Kehamilan dan Risiko Keguguran", 0.542, 0.591, 0.5652]]
      }
   ]
};
/* Pengujian sistem. passed = 104 dihitung dari 95,41% x 109 kasus (104/109 = 95,41%). */
window.SKRIPSI_DATA.testing = { blackbox: { cases: 109, rate: 95.41, passed: 104 }, sus: { n: 5, mean: 63.5 } };
