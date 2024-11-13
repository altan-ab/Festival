import { useState } from 'react'

export default function PosterSection({ date, festivalData }) {
  /*Challenge
	
	Müzikseverlerin bu yılki Festival'de hangi gün hangi grupların çalacağını bilmesi gerekiyor. Sizin göreviniz bu PosterSection'ı aşağıdaki gibi bu işi yapabilecek hale getirmek: 
	
		1. Aşağıdaki kodlanmış paragraflar, yinelemeli olarak oluşturulan paragraflarla değiştirilmelidir - festivalData array'indeki her bir grup için, bileşene bir prop olarak aktarılan günde (1, 2 veya 3 Haziran) çalan bir grup. Belirli bir günün bölümünde görünmesi gereken *sadece* gruplar o gün çalan gruplardan oluşmalıdır.
		   
		2. Gruplar önem sırasına göre sıralanmalıdır (festivalData array'indeki nesnelerin "importance" özelliği). 1'den 4'e kadar sıralanırlar, 1 en önemli ve 4 en az önemli olandır. İki grup aynı öneme sahipse, array'de daha önce görünen PosterBölümü'nde ilk olarak görünmelidir. 
		   
		3. Bir grubun önem değerinin 1, 2, 3 veya 4 olmasına bağlı olarak, paragraf elementi sırasıyla "giant", "big", "medium" veya "small" class adını almalıdır. 
		
		4. Bu görevleri doğru bir şekilde tamamlarsanız, 1 Haziran bölümünde yalnızca 1 Haziran 'da çalan grupları görmelisiniz; en önemlileri üstte büyük puntolarla, daha az önemlileri ise altta daha küçük puntolarla yer almalıdır. Aynı şey 2 ve 3 Haziran için de geçerlidir. Sayfanın altında otomatik olarak bir footer da görünmelidir.  
 */

  const filteredBands = festivalData.filter((band) => band.date === date)

  const sortedBands = filteredBands.sort((a, b) => a.importance - b.importance)

  const bandElements = sortedBands.map((band) => {
    let className = ''
    switch (band.importance) {
      case 1:
        className = 'giant'
        break
      case 2:
        className = 'big'
        break
      case 3:
        className = 'medium'
        break
      case 4:
        className = 'small'
        break
      default:
        className = 'small'
    }

    return (
      <p key={band.name} className={className}>
        {band.name}
      </p>
    )
  })

  return (
    <div className="lineup-container">
      <div className="day-container">
        <h3>{date}</h3>
      </div>
      {bandElements.length > 0 ? (
        bandElements
      ) : (
        <p className="small">No bands available</p>
      )}
      {/* <p className='giant'>Süper Büyük Önemli Grup</p>
      <p className='giant'>Başka Biri</p>
      <p className='big'>Biraz Daha Az Önemli Grup</p>
      <p className='big'>Başka Biri</p>
      <p className='medium'>Orta Dereceli Grup</p>
      <p className='medium'>Başka Biri</p>
      <p className='small'>O kadar da önemli olmayan bir grup</p> */}
    </div>
  )
}
