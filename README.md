Bu layihədə mock data istifadə olunub. Restoran məlumatları map metodu ilə RestaurantCard komponentinə props vasitəsilə ötürülür. Komponent daxilində isə TypeScript ilə prop tipləri müəyyən olunub.

Kart üzərinə hover edildikdə, kart yuxarı doğru müəyyən müddət ərzində (transition ilə) hərəkət edir. Eyni zamanda şəkil zoom (scale) olunur və kartın kölgəsi (box-shadow) artırılır.

Dizayn sadə olsa da, məncə çox gözəl və funksional alınmışdır.

Layihənin strukturuna gəldikdə, hər bir komponent öz qovluğunda saxlanılır, stil faylları isə assets qovluğunda yerləşir və komponentə import edilir.
