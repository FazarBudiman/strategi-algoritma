import java.util.ArrayList;
import java.util.List;

public class CaseBruteForce {
    private static final int[] warung = {10, 25, 30, 40, 50, 75, 80, 110, 130};

    public static List<Integer> findBestStops(int[] warung) {
        List<Integer> bestCombination = null;
        int minStops = Integer.MAX_VALUE; // Jumlah berhenti terkecil (dalam hal ini, inisialisasi dengan nilai maksimum)

        // Perulangan untuk semua kombinasi titik berhenti
        for (int i = 1; i < (1 << warung.length); i++) {
            List<Integer> stops = new ArrayList<>();

            // Membangun kombinasi saat ini
            for (int j = 0; j < warung.length; j++) {
                if ((i & (1 << j)) != 0) {
                    stops.add(warung[j]);
                }
            }

            // Memeriksa apakah kombinasi saat ini valid
            if (isCombinationValid(stops)) {
                int numStops = stops.size();

                // Memperbarui kombinasi terbaik jika jumlah berhenti lebih kecil
                if (numStops < minStops) {
                    minStops = numStops;
                    bestCombination = stops;
                }
            }
        }

        return bestCombination;
    }

    private static boolean isCombinationValid(List<Integer> stops) {
        // Periksa jarak antara dua titik berhenti berturut-turut
        for (int i = 0; i < stops.size() - 1; i++) {
            if (stops.get(i + 1) - stops.get(i) > 30) {
                return false;
            }
        }
        if((stops.get(stops.size() - 1) + 30 ) < 140 || (stops.get(0) - 30 ) > 0 ){
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        List<Integer> bestStops = findBestStops(warung);

        // Menampilkan hasil
        System.out.println("Titik berhenti terbaik: " + bestStops);
    }
}
