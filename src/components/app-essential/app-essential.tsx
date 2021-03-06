import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-essential",
  styleUrl: "app-essential.css",
})
export class AppEssential implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/" />
            </ion-buttons>
            <ion-title>
              Compact: Terawih 8 raka'at with Witir 3 raka'at
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            <ion-list-header>Terawih - Raka'at 1</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                At-Takathur
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) أَلْهَاكُمُ التَّكَاثُرُ
                  <br /> (2) حَتَّىٰ زُرْتُمُ الْمَقَابِرَ
                  <br /> (3) كَلَّا سَوْفَ تَعْلَمُونَ
                  <br /> (4) ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ
                  <br /> (5) كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ
                  <br /> (6) لَتَرَوُنَّ الْجَحِيمَ
                  <br /> (7) ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ
                  <br /> (8) ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 2</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 3</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Asr
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) وَالْعَصْرِ
                  <br /> (2) إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ
                  <br /> (3) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ
                  وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 4</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 5</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Humaza
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ
                  <br /> (2) الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ
                  <br /> (3) يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ
                  <br /> (4) كَلَّا ۖ لَيُنْبَذَنَّ فِي الْحُطَمَةِ
                  <br /> (5) وَمَا أَدْرَاكَ مَا الْحُطَمَةُ
                  <br /> (6) نَارُ اللَّهِ الْمُوقَدَةُ
                  <br /> (7) الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ
                  <br /> (8) إِنَّهَا عَلَيْهِمْ مُؤْصَدَةٌ
                  <br /> (9) فِي عَمَدٍ مُمَدَّدَةٍ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 6</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 7</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Fil
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ
                  الْفِيلِ
                  <br /> (2) أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
                  <br /> (3) وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
                  <br /> (4) تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ
                  <br /> (5) فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Terawih - Raka'at 8</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Witir - Raka'at 1</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-A'la
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى
                  <br /> (2) الَّذِي خَلَقَ فَسَوَّىٰ
                  <br /> (3) وَالَّذِي قَدَّرَ فَهَدَىٰ
                  <br /> (4) وَالَّذِي أَخْرَجَ الْمَرْعَىٰ
                  <br /> (5) فَجَعَلَهُ غُثَاءً أَحْوَىٰ
                  <br /> (6) سَنُقْرِئُكَ فَلَا تَنْسَىٰ
                  <br /> (7) إِلَّا مَا شَاءَ اللَّهُ ۚ إِنَّهُ يَعْلَمُ
                  الْجَهْرَ وَمَا يَخْفَىٰ
                  <br /> (8) وَنُيَسِّرُكَ لِلْيُسْرَىٰ
                  <br /> (9) فَذَكِّرْ إِنْ نَفَعَتِ الذِّكْرَىٰ
                  <br /> (10) سَيَذَّكَّرُ مَنْ يَخْشَىٰ
                  <br /> (11) وَيَتَجَنَّبُهَا الْأَشْقَى
                  <br /> (12) الَّذِي يَصْلَى النَّارَ الْكُبْرَىٰ
                  <br /> (13) ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ
                  <br /> (14) قَدْ أَفْلَحَ مَنْ تَزَكَّىٰ
                  <br /> (15) وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ
                  <br /> (16) بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا
                  <br /> (17) وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ
                  <br /> (18) إِنَّ هَٰذَا لَفِي الصُّحُفِ الْأُولَىٰ
                  <br /> (19) صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Witir - Raka'at 2</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-list-header>Witir - Raka'at 3</ion-list-header>
            <ion-item>
              <ion-label>
                Al-Fatihah
                <hr />
                Al-Ikhlaas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ هُوَ اللَّهُ أَحَدٌ
                  <br /> (2) اللَّهُ الصَّمَدُ
                  <br /> (3) لَمْ يَلِدْ وَلَمْ يُولَدْ
                  <br /> (4) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
                </div>
                Al-Falaq
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
                  <br /> (2) مِنْ شَرِّ مَا خَلَقَ
                  <br /> (3) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ
                  <br /> (4) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
                  <br /> (5) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ
                </div>
                Al-Nas
                <div class="Arabic">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  <br /> (1) قُلْ أَعُوذُ بِرَبِّ النَّاسِ
                  <br /> (2) مَلِكِ النَّاسِ
                  <br /> (3) إِلَٰهِ النَّاسِ
                  <br /> (4) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
                  <br /> (5) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
                  <br /> (6) مِنَ الْجِنَّةِ وَالنَّاسِ
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </Host>
    );
  }
}
