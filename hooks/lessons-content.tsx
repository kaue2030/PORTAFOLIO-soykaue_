import React from 'react';
import { Language } from './use-language';

export const cristologiaContent: Record<Language, any> = {
  es: {
    base: {
      description: (
        <>
          La <span className="font-bold text-black">Cristología</span> es el estudio bíblico de quién es Jesucristo. Enseña que Jesús es <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadero Dios</span> (Juan 1:1) y <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadero hombre</span> (Hebreos 2:17): nació de una virgen (Mateo 1:23), vivió sin pecado (Hebreos 4:15), murió en la cruz por nuestros pecados (1 Corintios 15:3), resucitó al tercer día (1 Corintios 15:4) y ahora gobierna como Señor (Filipenses 2:9-11). Él es el centro de la fe cristiana, el Salvador del mundo y el <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">único mediador</span> entre Dios y los hombres (1 Timoteo 2:5).
        </>
      ),
      deity: ["La realidad de las dos naturalezas", "La integridad de las dos naturalezas", "La unión de las dos naturalezas en una sola persona", "Importancia de esta doctrina para la Iglesia."],
      incarnation: ["Antes de la encarnación", "Después de la encarnación", "Cristo es Dios y Hombre al 100%", "La doble naturaleza de Cristo"],
      names: ["Se le llama Dios", "Se le llama Señor", "Se le llama el Primero y el Último", "Cristo, el Ungido de Jehová"],
      attributes: ["Omnipotencia", "Omnipresencia", "Omnisciencia"],
      properties: ["Su propia existencia", "Su inmutabilidad", "Su infinitud", "a. Su absoluta perfección", "b. Su eternidad"]
    },
    introduccion: {
      p1: (
        <>
          La Cristología es la <span className="bg-yellow-200/80 px-1 rounded-sm">doctrina bíblica que estudia la persona y la obra de nuestro Señor Jesucristo</span>. Su propósito es explicar quién es Jesús, cuál es la naturaleza de su ser, cuál fue su misión en la tierra y qué significado tiene su obra redentora para la humanidad. Este estudio es fundamental para la fe cristiana, pues Cristo no es un personaje secundario en las Escrituras, sino el <span className="bg-yellow-200/80 px-1 rounded-sm">centro mismo de la revelación divina y el fundamento de la salvación</span>.
        </>
      ),
      p2: "La Biblia nos enseña que en Cristo hemos sido bendecidos con toda bendición espiritual, y que en Él se encuentran la plenitud de la gracia, la verdad y la redención de Dios para el hombre. Por ello, la Iglesia de Jesucristo tiene la urgente necesidad de conocerle, adorarle, obedecerle y disfrutar plenamente de todas las riquezas espirituales que el Padre ha concedido en su Hijo amado.",
      verse1: "“Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo.”",
      ref1: "Efesios 1:3 (Reina-Valera 1960)",
      link1: "https://www.biblegateway.com/passage/?search=Efesios%201:3&version=RVR1960",
      p3: "En un tiempo en que las corrientes filosóficas modernas, los pensamientos humanistas y las falsas doctrinas buscan desviar la atención de la verdad bíblica, resulta imprescindible que los creyentes estén sólidamente fundamentados en la doctrina de la persona de Jesucristo. Cuando no existe una enseñanza clara y firme acerca de Cristo, muchos pueden ser confundidos y arrastrados por ideas erróneas que debilitan la fe.",
      p4: (
        <>
          La enseñanza bíblica de la Cristología fortalece al creyente, afirma su confianza en Dios y le ayuda a comprender que Jesucristo no es solo un maestro moral o un ejemplo de bondad, sino el <span className="bg-yellow-200/80 px-1 rounded-sm">Hijo eterno de Dios, el Verbo hecho carne, el Salvador del mundo y el único mediador entre Dios y los hombres</span>.
        </>
      ),
      verse2: "“Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.”",
      ref2: "Juan 1:14 (Reina-Valera 1960)",
      link2: "https://www.biblegateway.com/passage/?search=Juan%201:14&version=RVR1960",
      verse3: "“Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.”",
      ref3: "1 Timoteo 2:5 (Reina-Valera 1960)",
      link3: "https://www.biblegateway.com/passage/?search=1%20Timoteo%202:5&version=RVR1960",
      p5: "Como ocurre con otras doctrinas esenciales de la Biblia, la Cristología ha sido también motivo de controversia a lo largo de la historia. Muchos debates teológicos han surgido en torno a la persona de Cristo, especialmente en relación con su naturaleza divina y su naturaleza humana. El Dr. Strong señala que las controversias respecto a la persona de Cristo giran principalmente sobre tres puntos fundamentales:",
      list: ["La realidad de las dos naturalezas.", "La integridad de las dos naturalezas.", "La unión de las dos naturalezas en una sola persona."]
    },
    deidad: {
      title: "I. La Deidad de Cristo",
      s1_title: "La realidad de las dos naturalezas",
      s1_p1: (
        <>
          La Biblia enseña que Jesucristo posee <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">dos naturalezas distintas en una sola persona</span>: una naturaleza divina y una naturaleza humana. Esta unión es conocida en teología como la unión hipostática. No son dos personas, sino una sola persona con dos naturalezas completas.
        </>
      ),
      v1: "“En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.”",
      r1: "Juan 1:1 (Reina-Valera 1960)",
      l1: "https://www.biblegateway.com/passage/?search=Juan%201:1&version=RVR1960",
      s2_title: "La integridad de las dos naturalezas",
      s2_p1: (
        <>
          Cada naturaleza mantiene sus atributos propios <span className="bg-yellow-200/80 px-1 rounded-sm">sin mezclarse ni confundirse</span>. Su divinidad no fue disminuida por su humanidad, ni su humanidad fue absorbida por su divinidad. Él es 100% Dios y 100% hombre.
        </>
      ),
      v2: "“Porque en él habita corporalmente toda la plenitud de la Deidad.”",
      r2: "Colosenses 2:9 (Reina-Valera 1960)",
      l2: "https://www.biblegateway.com/passage/?search=Colosenses%202:9&version=RVR1960",
      s3_title: "La unión de las dos naturalezas en una sola persona",
      s3_p1: (
        <>
          Estas dos naturalezas están unidas de forma inseparable en la persona eterna del Hijo de Dios. Esta unión permite que Cristo sea el <span className="bg-yellow-200/80 px-1 rounded-sm">mediador perfecto</span>, representando plenamente a Dios ante los hombres y a los hombres ante Dios.
        </>
      ),
      v3: "“Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.”",
      r3: "1 Timoteo 2:5 (Reina-Valera 1960)",
      l3: "https://www.biblegateway.com/passage/?search=1%20Timoteo%202:5&version=RVR1960",
      s4_title: "Importancia de esta doctrina para la Iglesia",
      s4_p1: (
        <>
          Sin la deidad de Cristo, su sacrificio no tendría un valor infinito para salvar a la humanidad. Y sin su humanidad, no podría haber muerto en nuestro lugar. La <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">validez de nuestra salvación</span> depende directamente de la verdad de quién es Cristo.
        </>
      )
    },
    encarnacion: {
      title: "II. La Encarnación de Cristo",
      s1_title: "Antes de la encarnación",
      s1_p1: (
        <>
          Antes de venir al mundo, Cristo existía eternamente como el <span className="bg-yellow-200/80 px-1 rounded-sm">Verbo eterno al lado del Padre</span>. Él no comenzó a existir en el pesebre de Belén; su existencia es desde la eternidad. Él es el Creador de todas las cosas.
        </>
      ),
      v1: "“Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.”",
      r1: "Juan 1:3 (Reina-Valera 1960)",
      l1: "https://www.biblegateway.com/passage/?search=Juan%201:3&version=RVR1960",
      s2_title: "Después de la encarnación",
      s2_p1: (
        <>
          En la encarnación, el Hijo eterno de Dios <span className="bg-yellow-200/80 px-1 rounded-sm">tomó para sí una naturaleza humana real y completa</span>, siendo concebido por el Espíritu Santo en el vientre de la virgen María. No dejó de ser Dios, sino que añadió la humanidad a su deidad.
        </>
      ),
      v2: "“Y aquel Verbo fue hecho carne, y habitó entre nosotros...”",
      r2: "Juan 1:14 (Reina-Valera 1960)",
      l2: "https://www.biblegateway.com/passage/?search=Juan%201:14&version=RVR1960",
      s3_title: "Cristo es Dios y Hombre al 100%",
      s3_p1: (
        <>
          La Biblia presenta a Jesús con todas las características de la humanidad (hambre, sed, cansancio, dolor, emociones) pero <span className="bg-yellow-200/80 px-1 rounded-sm">absolutamente sin pecado</span>. Al mismo tiempo, operaba con toda la autoridad y los atributos de Dios.
        </>
      ),
      v3: "“...sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.”",
      r3: "Hebreos 4:15 (Reina-Valera 1960)",
      l3: "https://www.biblegateway.com/passage/?search=Hebreos%204:15&version=RVR1960",
      s4_title: "La doble naturaleza de Cristo",
      s4_p1: (
        <>
          La encarnación es el misterio más grande de la piedad. Dios se manifestó en carne para redimir a lo que se había perdido. Esta <span className="bg-yellow-200/80 px-1 rounded-sm">doble naturaleza</span> le permite ser nuestro Sumo Sacerdote compasivo que entiende nuestras debilidades.
        </>
      )
    },
    nombres: {
      title: "III. Los Nombres Divinos de Cristo",
      s1_title: "Se le llama Dios",
      s1_p1: (
        <>
          Las Escrituras no dudan en atribuir el <span className="bg-yellow-200/80 px-1 rounded-sm">nombre de Dios directamente a Jesucristo</span>. Esto no es solo un título honorífico, sino una declaración de su esencia misma. El apóstol Pablo lo expresa con claridad:
        </>
      ),
      v1: "“...de los cuales son los patriarcas, y de los cuales, según la carne, vino Cristo, el cual es Dios sobre todas las cosas, bendito por los siglos. Amén.”",
      r1: "Romanos 9:5 (Reina-Valera 1960)",
      l1: "https://www.biblegateway.com/passage/?search=Romanos%209:5&version=RVR1960",
      s2_title: "Se le llama Señor",
      s2_p1: (
        <>
          El título &quot;Señor&quot; (Kurios en griego), cuando se aplica a Cristo en el Nuevo Testamento, a menudo equivale al nombre sagrado de Dios (Jehová) del Antiguo Testamento. Confesar que <span className="bg-yellow-200/80 px-1 rounded-sm">Jesús es el Señor</span> es el fundamento de la fe cristiana.
        </>
      ),
      v2: "“...y que toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.”",
      r2: "Filipenses 2:11 (Reina-Valera 1960)",
      l2: "https://www.biblegateway.com/passage/?search=Filipenses%202:11&version=RVR1960",
      s3_title: "Se le llama el Primero y el Último",
      s3_p1: (
        <>
          Este título describe la <span className="bg-yellow-200/80 px-1 rounded-sm">eternidad y la soberanía de Cristo</span>. Es un título que Dios reclama para sí mismo en el Antiguo Testamento y que Jesús se atribuye en el libro de Apocalipsis:
        </>
      ),
      v3: "“Cuando le vi, caí como muerto a sus pies. Y él puso su diestra sobre mí, diciéndome: No temas; yo soy el primero y el último;”",
      r3: "Apocalipsis 1:17 (Reina-Valera 1960)",
      l3: "https://www.biblegateway.com/passage/?search=Apocalipsis%201:17&version=RVR1960",
      s4_title: "Cristo, el Ungido de Jehová",
      s4_p1: (
        <>
          El nombre &quot;Cristo&quot; significa <span className="bg-yellow-200/80 px-1 rounded-sm">el Ungido</span>. Él es el Rey, Sacerdote y Profeta prometido, ungido por el Espíritu Santo para llevar a cabo la obra de la redención. Su nombre está por encima de todo nombre.
        </>
      )
    },
    atributos: {
      title: "IV. Los Atributos Divinos de Cristo",
      s1_title: "Omnipotencia",
      s1_p1: (
        <>
          Este atributo significa <span className="bg-yellow-200/80 px-1 rounded-sm">posee todo poder absoluto</span>, porque Él es verdaderamente Dios. Su <span className="bg-yellow-200/80 px-1 rounded-sm">autoridad es suprema sobre toda la creación</span>. En el Evangelio de Mateo, Cristo mismo declaró su soberanía universal:
        </>
      ),
      v1: "“Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra.”",
      r1: "Mateo 28:18 (Reina-Valera 1960)",
      l1: "https://www.biblegateway.com/passage/?search=Mateo%2028:18&version=RVR1960",
      s1_p2: (
        <>
          Él demostró este poder divino durante su ministerio terrenal al tener autoridad para sanar enfermedades (
          <a href="https://www.biblegateway.com/passage/?search=Lucas%204:38-41&version=RVR1960" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Lucas 4:38-41</a>
          ) y, de manera aún más profunda, al tener la autoridad para perdonar pecados (
          <a href="https://www.biblegateway.com/passage/?search=Lucas%205:20-26&version=RVR1960" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Lucas 5:20-26</a>
          ), lo cual es una prerrogativa exclusiva de Dios. Su poder y dominio están por encima de todo principado y autoridad (
          <a href="https://www.biblegateway.com/passage/?search=Efesios%201:20-22&version=RVR1960" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Efesios 1:20-22</a>
          ).
        </>
      ),
      s2_title: "Omnipresencia",
      s2_p1: (
        <>
          Este atributo se refiere a la <span className="bg-yellow-200/80 px-1 rounded-sm">facultad divina de estar presente en todas partes al mismo tiempo</span>. Aunque en su naturaleza humana Cristo ascendió al cielo, en su naturaleza divina Él es omnipresente. Él dio esta promesa a sus seguidores:
        </>
      ),
      v2: "“Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.”",
      r2: "Mateo 18:20 (Reina-Valera 1960)",
      l2: "https://www.biblegateway.com/passage/?search=Mateo%2018:20&version=RVR1960",
      s2_p2_intro: "Y también afirmó antes de ascender:",
      v3: "“...y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.”",
      r3: "Mateo 28:20 (Reina-Valera 1960)",
      l3: "https://www.biblegateway.com/passage/?search=Mateo%2028:20&version=RVR1960",
      s3_title: "Omnisciencia",
      s3_p1: (
        <>
          La omnisciencia indica que Cristo, como Dios, posee un <span className="bg-yellow-200/80 px-1 rounded-sm">conocimiento perfecto e infinito de todas las cosas</span>. Sus discípulos reconocieron claramente este atributo divino cuando le dijeron:
        </>
      ),
      v4: "“Ahora entendemos que sabes todas las cosas, y no necesitas que nadie te pregunte; por esto creemos que has salido de Dios.”",
      r4: "Juan 16:30 (Reina-Valera 1960)",
      l4: "https://www.biblegateway.com/passage/?search=Juan%2016:30&version=RVR1960",
      s3_p2: (
        <>
          Durante su ministerio, Jesús demostró que conocía plenamente lo oculto, incluyendo los pensamientos y las intenciones del corazón de las personas (
          <a href="https://www.biblegateway.com/passage/?search=Juan%202:24-25&version=RVR1960" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Juan 2:24-25</a>
          ). Al poseer omnisciencia, Cristo demuestra una vez más su deidad absoluta.
        </>
      )
    },
    propiedades: {
      title: "V. Propiedades Divinas de Cristo",
      s1_title: "Su propia existencia",
      s1_p1: (
        <>
          Cristo no depende de nada ni de nadie para existir; Él posee <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">vida en sí mismo</span>. Esta autoexistencia es un atributo exclusivo de la Deidad. Jesús mismo lo afirmó:
        </>
      ),
      v1: "“Porque como el Padre tiene vida en sí mismo, así también ha dado al Hijo el tener vida en sí mismo;”",
      r1: "Juan 5:26 (Reina-Valera 1960)",
      l1: "https://www.biblegateway.com/passage/?search=Juan%205:26&version=RVR1960",
      s2_title: "Su inmutabilidad",
      s2_p1: (
        <>
          Este atributo significa que Cristo <span className="bg-yellow-200/80 px-1 rounded-sm">no cambia en su ser, sus perfecciones, sus propósitos ni sus promesas</span>. Él es el mismo ayer, hoy y por los siglos. En un mundo de cambios constantes, la inmutabilidad de Cristo es el ancla de nuestra fe.
        </>
      ),
      v2: "“Jesucristo es el mismo ayer, y hoy, y por los siglos.”",
      r2: "Hebreos 13:8 (Reina-Valera 1960)",
      l2: "https://www.biblegateway.com/passage/?search=Hebreos%2013:8&version=RVR1960",
      s3_title: "Su infinitud",
      s3_p1: (
        <>
          La infinitud divina de Cristo significa que Él no tiene límites. Se manifiesta de dos formas principales: su <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">perfección absoluta</span> y su <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">eternidad</span>. No hay fin a su gloria, a su gracia ni a su ser.
        </>
      ),
      s3_p2: (
        <>
          <span className="font-bold underline">a. Su absoluta perfección:</span> Cristo es perfecto en todos sus caminos y atributos. No hay mancha ni falta en Él.
        </>
      ),
      s3_p3: (
        <>
          <span className="font-bold underline">b. Su eternidad:</span> Él es antes de todas las cosas y subsistirá por siempre. Su reino no tendrá fin.
        </>
      ),
      v3: "“Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.”",
      r3: "Apocalipsis 1:8 (Reina-Valera 1960)",
      l3: "https://www.biblegateway.com/passage/?search=Apocalipsis%201:8&version=RVR1960"
    }
  },
  en: {
    base: {
      description: (
        <>
          <span className="font-bold text-black">Christology</span> is the biblical study of who Jesus Christ is. It teaches that Jesus is <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">true God</span> (John 1:1) and <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">true man</span> (Hebrews 2:17): born of a virgin (Matthew 1:23), lived without sin (Hebreos 4:15), died on the cross for our sins (1 Corinthians 15:3), rose on the third day (1 Corinthians 15:4), and now reigns as Lord (Philippians 2:9-11). He is the center of the Christian faith, the Savior of the world, and the <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">only mediator</span> between God and men (1 Timothy 2:5).
        </>
      ),
      deity: ["The reality of the two natures", "The integrity of the two natures", "The union of the two natures in one person", "Importance of this doctrine for the Church."],
      incarnation: ["Before the incarnation", "After the incarnation", "Christ is 100% God and 100% Man", "The dual nature of Christ"],
      names: ["He is called God", "He is called Lord", "He is called the First and the Last", "Christ, the Anointed of Jehovah"],
      attributes: ["Omnipotence", "Omnipresence", "Omnisciencia"],
      properties: ["His own existence", "His immutability", "His infinity", "a. His absolute perfection", "b. His eternity"]
    },
    introduccion: {
      p1: (
        <>
          Christology is the <span className="bg-yellow-200/80 px-1 rounded-sm">biblical doctrine that studies the person and work of our Lord Jesus Christ</span>. Its purpose is to explain who Jesus is, the nature of His being, His mission on earth, and the significance of His redemptive work for humanity. This study is fundamental to the Christian faith, as Christ is not a secondary character in the Scriptures but the <span className="bg-yellow-200/80 px-1 rounded-sm">very center of divine revelation and the foundation of salvation</span>.
        </>
      ),
      p2: "The Bible teaches us that in Christ we have been blessed with every spiritual blessing, and that in Him are found the fullness of God's grace, truth, and redemption for mankind. Therefore, the Church of Jesus Christ has an urgent need to know Him, worship Him, obey Him, and fully enjoy all the spiritual riches that the Father has bestowed upon His beloved Son.",
      verse1: "“Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ.”",
      ref1: "Ephesians 1:3 (NKJV)",
      link1: "https://www.biblegateway.com/passage/?search=Ephesians%201:3&version=NKJV",
      p3: "In a time when modern philosophical currents, humanistic thoughts, and false doctrines seek to divert attention from biblical truth, it is essential for believers to be solidly grounded in the doctrine of the person of Jesus Christ. When there is no clear and firm teaching about Christ, many can be confused and swept away by erroneous ideas that weaken the faith.",
      p4: (
        <>
          The biblical teaching of Christology strengthens the believer, affirms their trust in God, and helps them understand that Jesus Christ is not just a moral teacher or an example of goodness, but the <span className="bg-yellow-200/80 px-1 rounded-sm">eternal Son of God, the Word made flesh, the Savior of the world, and the only mediator between God and men</span>.
        </>
      ),
      verse2: "“And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.”",
      ref2: "John 1:14 (NKJV)",
      link2: "https://www.biblegateway.com/passage/?search=John%201:14&version=NKJV",
      verse3: "“For there is one God and one Mediator between God and men, the Man Christ Jesus.”",
      ref3: "1 Timothy 2:5 (NKJV)",
      link3: "https://www.biblegateway.com/passage/?search=1%20Timothy%202:5&version=NKJV",
      p5: "As with other essential doctrines of the Bible, Christology has also been a subject of controversy throughout history. Many theological debates have arisen surrounding the person of Christ, especially regarding His divine and human natures. Dr. Strong notes that controversies regarding the person of Christ revolve mainly around three fundamental points:",
      list: ["The reality of the two natures.", "The integrity of the two natures.", "The union of the two natures in one person."]
    },
    deidad: {
      title: "I. The Deity of Christ",
      s1_title: "The reality of the two natures",
      s1_p1: (
        <>
          The Bible teaches that Jesus Christ possesses <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">two distinct natures in one person</span>: a divine nature and a human nature. This union is known in theology as the hypostatic union. They are not two persons, but one person with two complete natures.
        </>
      ),
      v1: "“In the beginning was the Word, and the Word was with God, and the Word was God.”",
      r1: "John 1:1 (NKJV)",
      l1: "https://www.biblegateway.com/passage/?search=John+1%3A1&version=NKJV",
      s2_title: "The integrity of the two natures",
      s2_p1: (
        <>
          Each nature maintains its own attributes <span className="bg-yellow-200/80 px-1 rounded-sm">without mixing or confusion</span>. His divinity was not diminished by His humanity, nor was His humanity absorbed by His divinity. He is 100% God and 100% man.
        </>
      ),
      v2: "“For in Him dwells all the fullness of the Godhead bodily.”",
      r2: "Colossians 2:9 (NKJV)",
      l2: "https://www.biblegateway.com/passage/?search=Colossians+2%3A9&version=NKJV",
      s3_title: "The union of the two natures in one person",
      s3_p1: (
        <>
          These two natures are inseparably united in the eternal person of the Son of God. This union allows Christ to be the <span className="bg-yellow-200/80 px-1 rounded-sm">perfect mediator</span>, fully representing God to men and men to God.
        </>
      ),
      v3: "“For there is one God and one Mediator between God and men, the Man Christ Jesus.”",
      r3: "1 Timothy 2:5 (NKJV)",
      l3: "https://www.biblegateway.com/passage/?search=1+Timothy+2%3A5&version=NKJV",
      s4_title: "Importance of this doctrine for the Church",
      s4_p1: (
        <>
          Without Christ's deity, His sacrifice would not have infinite value to save humanity. And without His humanity, He could not have died in our place. The <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">validity of our salvation</span> depends directly on the truth of who Christ is.
        </>
      )
    },
    encarnacion: {
      title: "II. The Incarnation of Christ",
      s1_title: "Before the incarnation",
      s1_p1: (
        <>
          Before coming into the world, Christ existed eternally as the <span className="bg-yellow-200/80 px-1 rounded-sm">eternal Word alongside the Father</span>. He did not begin to exist in the manger of Bethlehem; His existence is from eternity. He is the Creator of all things.
        </>
      ),
      v1: "“All things were made through Him, and without Him nothing was made that was made.”",
      r1: "John 1:3 (NKJV)",
      l1: "https://www.biblegateway.com/passage/?search=John+1%3A3&version=NKJV",
      s2_title: "After the incarnation",
      s2_p1: (
        <>
          In the incarnation, the eternal Son of God <span className="bg-yellow-200/80 px-1 rounded-sm">took upon Himself a real and complete human nature</span>, being conceived by the Holy Spirit in the womb of the virgin Mary. He did not cease to be God, but added humanity to His deity.
        </>
      ),
      v2: "“And the Word became flesh and dwelt among us...”",
      r2: "John 1:14 (NKJV)",
      l2: "https://www.biblegateway.com/passage/?search=John+1%3A14&version=NKJV",
      s3_title: "Christ is 100% God and 100% Man",
      s3_p1: (
        <>
          The Bible presents Jesus with all the characteristics of humanity (hunger, thirst, tiredness, pain, emotions) but <span className="bg-yellow-200/80 px-1 rounded-sm">absolutely without sin</span>. At the same time, He operated with all the authority and attributes of God.
        </>
      ),
      v3: "“...but was in all points tempted as we are, yet without sin.”",
      r3: "Hebrews 4:15 (NKJV)",
      l3: "https://www.biblegateway.com/passage/?search=Hebrews+4%3A15&version=NKJV",
      s4_title: "The dual nature of Christ",
      s4_p1: (
        <>
          The incarnation is the greatest mystery of godliness. God was manifested in the flesh to redeem that which was lost. This <span className="bg-yellow-200/80 px-1 rounded-sm">dual nature</span> allows Him to be our compassionate High Priest who understands our weaknesses.
        </>
      )
    },
    nombres: {
      title: "III. The Divine Names of Christ",
      s1_title: "He is called God",
      s1_p1: (
        <>
          The Scriptures do not hesitate to attribute the <span className="bg-yellow-200/80 px-1 rounded-sm">name of God directly to Jesus Christ</span>. This is not just an honorary title, but a declaration of His very essence. The Apostle Paul expresses it clearly:
        </>
      ),
      v1: "“...of whom are the fathers and from whom, according to the flesh, Christ came, who is over all, the eternally blessed God. Amen.”",
      r1: "Romans 9:5 (NKJV)",
      l1: "https://www.biblegateway.com/passage/?search=Romans+9%3A5&version=NKJV",
      s2_title: "He is called Lord",
      s2_p1: (
        <>
          The title &quot;Lord&quot; (Kurios in Greek), when applied to Christ in the New Testament, is often equivalent to the sacred name of God (Jehovah) from the Old Testament. Confessing that <span className="bg-yellow-200/80 px-1 rounded-sm">Jesus is Lord</span> is the foundation of the Christian faith.
        </>
      ),
      v2: "“...and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.”",
      r2: "Philippians 2:11 (NKJV)",
      l2: "https://www.biblegateway.com/passage/?search=Philippians+2%3A11&version=NKJV",
      s3_title: "He is called the First and the Last",
      s3_p1: (
        <>
          This title describes the <span className="bg-yellow-200/80 px-1 rounded-sm">eternity and sovereignty of Christ</span>. It is a title that God claims for Himself in the Old Testament and that Jesus attributes to Himself in the book of Revelation:
        </>
      ),
      v3: "“And when I saw Him, I fell at His feet as dead. But He laid His right hand on me, saying to me, ‘Do not be afraid; I am the First and the Last.’”",
      r3: "Revelation 1:17 (NKJV)",
      l3: "https://www.biblegateway.com/passage/?search=Revelation+1%3A17&version=NKJV",
      s4_title: "Christ, the Anointed of Jehovah",
      s4_p1: (
        <>
          The name &quot;Christ&quot; means <span className="bg-yellow-200/80 px-1 rounded-sm">the Anointed One</span>. He is the promised King, Priest, and Prophet, anointed by the Holy Spirit to carry out the work of redemption. His name is above every name.
        </>
      )
    },
    atributos: {
      title: "IV. The Divine Attributes of Christ",
      s1_title: "Omnipotence",
      s1_p1: (
        <>
          This attribute means that He <span className="bg-yellow-200/80 px-1 rounded-sm">possesses all absolute power</span>, because He is truly God. His <span className="bg-yellow-200/80 px-1 rounded-sm">authority is supreme over all creation</span>. In the Gospel of Matthew, Christ Himself declared His universal sovereignty:
        </>
      ),
      v1: "“And Jesus came and spoke to them, saying, ‘All authority has been given to Me in heaven and on earth.’”",
      r1: "Matthew 28:18 (NKJV)",
      l1: "https://www.biblegateway.com/passage/?search=Matthew+28%3A18&version=NKJV",
      s1_p2: (
        <>
          He demonstrated this divine power during His earthly ministry by having the authority to heal diseases (
          <a href="https://www.biblegateway.com/passage/?search=Luke+4%3A38-41&version=NKJV" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Luke 4:38-41</a>
          ) and, even more profoundly, by having the authority to forgive sins (
          <a href="https://www.biblegateway.com/passage/?search=Luke+5%3A20-26&version=NKJV" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Luke 5:20-26</a>
          ), which is an exclusive prerogative of God. His power and dominion are above all principality and authority (
          <a href="https://www.biblegateway.com/passage/?search=Ephesians+1%3A20-22&version=NKJV" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Ephesians 1:20-22</a>
          ).
        </>
      ),
      s2_title: "Omnipresence",
      s2_p1: (
        <>
          This attribute refers to the <span className="bg-yellow-200/80 px-1 rounded-sm">divine faculty of being present everywhere at the same time</span>. Although in His human nature Christ ascended to heaven, in His divine nature He is omnipresent. He gave this promise to His followers:
        </>
      ),
      v2: "“For where two or three are gathered together in My name, I am there in the midst of them.”",
      r2: "Matthew 18:20 (NKJV)",
      l2: "https://www.biblegateway.com/passage/?search=Matthew+18%3A20&version=NKJV",
      s2_p2_intro: "And He also stated before ascending:",
      v3: "“...and lo, I am with you always, even to the end of the age. Amen.”",
      r3: "Matthew 28:20 (NKJV)",
      l3: "https://www.biblegateway.com/passage/?search=Matthew+28%3A20&version=NKJV",
      s3_title: "Omniscience",
      s3_p1: (
        <>
          Omniscience indicates that Christ, as God, possesses <span className="bg-yellow-200/80 px-1 rounded-sm">perfect and infinite knowledge of all things</span>. His disciples clearly recognized this divine attribute when they said to Him:
        </>
      ),
      v4: "“Now we are sure that You know all things, and have no need that anyone should question You. By this we believe that You came forth from God.”",
      r4: "John 16:30 (NKJV)",
      l4: "https://www.biblegateway.com/passage/?search=John+16%3A30&version=NKJV",
      s3_p2: (
        <>
          During His ministry, Jesus demonstrated that He fully knew what was hidden, including the thoughts and intentions of people's hearts (
          <a href="https://www.biblegateway.com/passage/?search=John+2%3A24-25&version=NKJV" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">John 2:24-25</a>
          ). By possessing omniscience, Christ once again demonstrates His absolute deity.
        </>
      )
    },
    propiedades: {
      title: "V. Divine Properties of Christ",
      s1_title: "His own existence",
      s1_p1: (
        <>
          Christ does not depend on anything or anyone to exist; He possesses <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">life in Himself</span>. This self-existence is an exclusive attribute of the Deity. Jesus Himself stated it:
        </>
      ),
      v1: "“For as the Father has life in Himself, so He has granted the Son to have life in Himself;”",
      r1: "John 5:26 (NKJV)",
      l1: "https://www.biblegateway.com/passage/?search=John+5%3A26&version=NKJV",
      s2_title: "His immutability",
      s2_p1: (
        <>
          This attribute means that Christ <span className="bg-yellow-200/80 px-1 rounded-sm">does not change in His being, His perfections, His purposes, or His promises</span>. He is the same yesterday, today, and forever. In a world of constant change, Christ's immutability is the anchor of our faith.
        </>
      ),
      v2: "“Jesus Christ is the same yesterday, today, and forever.”",
      r2: "Hebrews 13:8 (NKJV)",
      l2: "https://www.biblegateway.com/passage/?search=Hebrews+13%3A8&version=NKJV",
      s3_title: "His infinity",
      s3_p1: (
        <>
          The divine infinity of Christ means that He has no limits. It manifests in two main forms: His <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">absolute perfection</span> and His <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">eternity</span>. There is no end to His glory, His grace, or His being.
        </>
      ),
      s3_p2: (
        <>
          <span className="font-bold underline">a. His absolute perfection:</span> Christ is perfect in all His ways and attributes. There is no spot or fault in Him.
        </>
      ),
      s3_p3: (
        <>
          <span className="font-bold underline">b. His eternity:</span> He is before all things and will exist forever. His kingdom will have no end.
        </>
      ),
      v3: "“‘I am the Alpha and the Omega, the Beginning and the End,’ says the Lord, ‘who is and who was and who is to come, the Almighty.’”",
      r3: "Revelation 1:8 (NKJV)",
      l3: "https://www.biblegateway.com/passage/?search=Revelation+1%3A8&version=NKJV"
    }
  },
  pt: {
    base: {
      description: (
        <>
          A <span className="font-bold text-black">Cristologia</span> é o estudo bíblico de quem é Jesus Cristo. Ensina que Jesus é <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadeiro Deus</span> (João 1:1) e <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadeiro homem</span> (Hebreus 2:17): nasceu de uma virgem (Mateus 1:23), viveu sem pecado (Hebreos 4:15), morreu na cruz pelos nossos pecados (1 Coríntios 15:3), ressuscitou ao terceiro dia (1 Coríntios 15:4) e agora governa como Senhor (Filipenses 2:9-11). Ele é o centro da fé cristã, o Salvador do mundo e o <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">único mediador</span> entre Deus e os homens (1 Timóteo 2:5).
        </>
      ),
      deity: ["A realidade das duas naturezas", "A integridade das duas naturezas", "A união das duas naturezas em uma só pessoa", "Importância desta doutrina para a Igreja."],
      incarnation: ["Antes da encarnação", "Depois da encarnação", "Cristo é 100% Deus e 100% Homem", "A dupla natureza de Cristo"],
      names: ["Ele é chamado de Deus", "Ele é chamado de Senhor", "Ele é chamado de o Primeiro e o Último", "Cristo, o Ungido de Jeová"],
      attributes: ["Onipotência", "Onipresença", "Onisciência"],
      properties: ["Sua própria existência", "Sua imutabilidade", "Sua infinitud", "a. Sua absoluta perfeição", "b. Sua eternidade"]
    },
    introduccion: {
      p1: (
        <>
          A Cristologia é a <span className="bg-yellow-200/80 px-1 rounded-sm">doutrina bíblica que estuda a pessoa e a obra de nosso Senhor Jesus Cristo</span>. Seu propósito é explicar quem é Jesus, qual é a natureza do seu ser, qual foi a sua missão na terra e que significado tem a sua obra redentora para a humanidade. Este estudo é fundamental para a fé cristã, pois Cristo não é um personagem secundário nas Escrituras, mas o <span className="bg-yellow-200/80 px-1 rounded-sm">centro mesmo da revelação divina e o fundamento da salvação</span>.
        </>
      ),
      p2: "A Bíblia nos ensina que em Cristo fomos abençoados com toda sorte de bênção espiritual, e que nele se encontram a plenitude da graça, a verdade e a redenção de Deus para o homem. Por isso, a Igreja de Jesus Cristo tem a urgente necessidade de conhecê-lo, adorá-lo, obedecê-lo e desfrutar plenamente de todas as riquezas espirituais que o Pai concedeu em seu Filho amado.",
      verse1: "“Bendito o Deus e Pai de nosso Senhor Jesus Cristo, o qual nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo.”",
      ref1: "Efésios 1:3 (Almeida Revista e Atualizada)",
      link1: "https://www.biblegateway.com/passage/?search=Ef%C3%A9sios%201:3&version=ARA",
      p3: "Em um tempo em que as correntes filosóficas modernas, os pensamentos humanistas e as falsas doutrinas buscam desviar a atenção da verdade bíblica, torna-se imprescindível que os crentes estejam solidamente fundamentados na doutrina da pessoa de Jesus Cristo. Quando não existe um ensino claro e firme acerca de Cristo, muitos podem ser confundidos e arrastados por ideias erróneas que enfraquecem a fé.",
      p4: (
        <>
          O ensino bíblico da Cristologia fortalece o crente, afirma a sua confiança em Deus e o ajuda a compreender que Jesus Cristo não é apenas um mestre moral ou um exemplo de bondade, mas o <span className="bg-yellow-200/80 px-1 rounded-sm">Filho eterno de Deus, o Verbo feito carne, o Salvador do mundo e o único mediador entre Deus e os homens</span>.
        </>
      ),
      verse2: "“E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigênito do Pai.”",
      ref2: "João 1:14 (Almeida Revista e Atualizada)",
      link2: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o%201:14&version=ARA",
      verse3: "“Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.”",
      ref3: "1 Timóteo 2:5 (Almeida Revista e Atualizada)",
      link3: "https://www.biblegateway.com/passage/?search=1%20Tim%C3%B3teo%202:5&version=ARA",
      p5: "Como ocorre con outras doutrinas essenciais da Bíblia, a Cristologia tem sido também motivo de controvérsia ao longo da história. Muitos debates teológicos surgiram em torno da pessoa de Cristo, especialmente em relação à sua natureza divina e sua natureza humana. O Dr. Strong assinala que as controvérsias a respeito da pessoa de Cristo giram principalmente sobre três pontos fundamentais:",
      list: ["A realidade das duas naturezas.", "A integridade das duas naturezas.", "A união das duas naturezas em uma só pessoa."]
    },
    deidad: {
      title: "I. A Divindade de Cristo",
      s1_title: "A realidade das duas naturezas",
      s1_p1: (
        <>
          A Bíblia ensina que Jesus Cristo possui <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">duas naturezas distintas em uma só pessoa</span>: uma natureza divina e uma natureza humana. Esta união é conhecida na teologia como a união hipostática. Não são duas pessoas, mas uma única pessoa com duas naturezas completas.
        </>
      ),
      v1: "“No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.”",
      r1: "João 1:1 (Almeida Revista e Atualizada)",
      l1: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+1%3A1&version=ARA",
      s2_title: "A integridade das duas naturezas",
      s2_p1: (
        <>
          Cada natureza mantém seus próprios atributos <span className="bg-yellow-200/80 px-1 rounded-sm">sem se misturar ou se confundir</span>. Sua divindade não foi diminuída por Sua humanidade, nem Sua humanidade foi absorvida por Sua divindade. Ele é 100% Deus e 100% homem.
        </>
      ),
      v2: "“Porque nele habita corporalmente toda a plenitude da Divindade.”",
      r2: "Colossenses 2:9 (Almeida Revista e Atualizada)",
      l2: "https://www.biblegateway.com/passage/?search=Colossenses+2%3A9&version=ARA",
      s3_title: "A união das duas naturezas em uma só pessoa",
      s3_p1: (
        <>
          Estas duas naturezas estão inseparavelmente unidas na pessoa eterna do Filho de Deus. Esta união permite que Cristo seja o <span className="bg-yellow-200/80 px-1 rounded-sm">mediador perfeito</span>, representando plenamente a Deus diante dos homens e os homens diante de Deus.
        </>
      ),
      v3: "“Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.”",
      r3: "1 Timóteo 2:5 (Almeida Revista e Atualizada)",
      l3: "https://www.biblegateway.com/passage/?search=1+Tim%C3%B3teo+2%3A5&version=ARA",
      s4_title: "Importância desta doutrina para a Igreja",
      s4_p1: (
        <>
          Sem a divindade de Cristo, seu sacrifício não teria um valor infinito para salvar a humanidade. E sem sua humanidade, não poderia ter morrido em nosso lugar. A <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">validade da nossa salvação</span> depende diretamente da verdade de quem é Cristo.
        </>
      )
    },
    encarnacion: {
      title: "II. A Encarnação de Cristo",
      s1_title: "Antes da encarnação",
      s1_p1: (
        <>
          Antes de vir ao mundo, Cristo existia eternamente como o <span className="bg-yellow-200/80 px-1 rounded-sm">Verbo eterno ao lado do Pai</span>. Ele não começou a existir na manjedoura de Belém; sua existência é desde a eternidade. Ele é o Criador de todas as coisas.
        </>
      ),
      v1: "“Todas as coisas foram feitas por intermédio dele, e, sem ele, nada do que foi feito se fez.”",
      r1: "João 1:3 (Almeida Revista e Atualizada)",
      l1: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+1%3A3&version=ARA",
      s2_title: "Depois da encarnação",
      s2_p1: (
        <>
          Na encarnação, o Filho eterno de Deus <span className="bg-yellow-200/80 px-1 rounded-sm">tomou para si uma natureza humana real e completa</span>, sendo concebido pelo Espírito Santo no ventre da virgem Maria. Não deixou de ser Deus, mas acrescentou a humanidade à sua divindade.
        </>
      ),
      v2: "“E o Verbo se fez carne e habitou entre nós...”",
      r2: "João 1:14 (Almeida Revista e Atualizada)",
      l2: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+1%3A14&version=ARA",
      s3_title: "Cristo é 100% Deus e 100% Homem",
      s3_p1: (
        <>
          A Bíblia apresenta Jesus com todas as características da humanidade (fome, sede, cansaço, dor, emoções), mas <span className="bg-yellow-200/80 px-1 rounded-sm">absolutamente sem pecado</span>. Ao mesmo tempo, operava com toda a autoridade e os atributos de Deus.
        </>
      ),
      v3: "“...mas um que, semelhantemente, em tudo foi tentado, mas sem pecado.”",
      r3: "Hebreus 4:15 (Almeida Revista e Atualizada)",
      l3: "https://www.biblegateway.com/passage/?search=Hebreus+4%3A15&version=ARA",
      s4_title: "A dupla natureza de Cristo",
      s4_p1: (
        <>
          A encarnação é o maior mistério da piedade. Deus se manifestou em carne para redimir o que se havia perdido. Esta <span className="bg-yellow-200/80 px-1 rounded-sm">dupla natureza</span> lhe permite ser o nosso Sumo Sacerdote compassivo que entende as nossas fraquezas.
        </>
      )
    },
    nombres: {
      title: "III. Os Nomes Divinos de Cristo",
      s1_title: "Ele é chamado de Deus",
      s1_p1: (
        <>
          As Escrituras não hesitam em atribuir o <span className="bg-yellow-200/80 px-1 rounded-sm">nome de Deus diretamente a Jesus Cristo</span>. Isso não é apenas um título honorífico, mas uma declaração de sua própria essência. O apóstolo Paulo expressa isso com clareza:
        </>
      ),
      v1: "“...dos quais são os patriarcas, e dos quais descende o Cristo, segundo a carne, o qual é sobre todos, Deus bendito para todo o sempre. Amém!”",
      r1: "Romanos 9:5 (Almeida Revista e Atualizada)",
      l1: "https://www.biblegateway.com/passage/?search=Romanos+9%3A5&version=ARA",
      s2_title: "Ele é chamado de Senhor",
      s2_p1: (
        <>
          O título &quot;Senhor&quot; (Kurios em grego), quando aplicado a Cristo no Novo Testamento, muitas vezes equivale ao nome sagrado de Deus (Jeová) do Antigo Testamento. Confessar que <span className="bg-yellow-200/80 px-1 rounded-sm">Jesus é o Senhor</span> é o fundamento da fé cristã.
        </>
      ),
      v2: "“...e toda língua confesse que Jesus Cristo é Senhor, para glória de Deus Pai.”",
      r2: "Filipenses 2:11 (Almeida Revista e Atualizada)",
      l2: "https://www.biblegateway.com/passage/?search=Filipenses+2%3A11&version=ARA",
      s3_title: "Ele é chamado de o Primeiro e o Último",
      s3_p1: (
        <>
          Este título descreve a <span className="bg-yellow-200/80 px-1 rounded-sm">eternidade e a soberania de Cristo</span>. É um título que Deus reivindica para si mesmo no Antigo Testamento e que Jesus atribui a si mesmo no livro de Apocalipse:
        </>
      ),
      v3: "“Quando o vi, caí a seus pés como morto. Porém ele pôs sobre mim a sua mão direita, dizendo: Não temas; eu sou o primeiro e o último;”",
      r3: "Apocalipsis 1:17 (Almeida Revista e Atualizada)",
      l3: "https://www.biblegateway.com/passage/?search=Apocalipse+1%3A17&version=ARA",
      s4_title: "Cristo, o Ungido de Jeová",
      s4_p1: (
        <>
          O nome &quot;Cristo&quot; significa <span className="bg-yellow-200/80 px-1 rounded-sm">o Ungido</span>. Ele é o Rei, Sacerdote e Profeta prometido, ungido pelo Espírito Santo para realizar a obra da redenção. Seu nome está acima de todo nome.
        </>
      )
    },
    atributos: {
      title: "IV. Os Atributos Divinos de Cristo",
      s1_title: "Onipotência",
      s1_p1: (
        <>
          Este atributo significa que Ele <span className="bg-yellow-200/80 px-1 rounded-sm">possui todo o poder absoluto</span>, porque Ele é verdadeiramente Deus. Sua <span className="bg-yellow-200/80 px-1 rounded-sm">autoridade é suprema sobre toda a criação</span>. No Evangelho de Mateus, o próprio Cristo declarou sua soberania universal:
        </>
      ),
      v1: "“Jesus, aproximando-se, falou-lhes, dizendo: Toda a autoridade me foi concedida no céu e na terra.”",
      r1: "Mateus 28:18 (Almeida Revista e Atualizada)",
      l1: "https://www.biblegateway.com/passage/?search=Mateus+28%3A18&version=ARA",
      s1_p2: (
        <>
          Ele demonstrou esse poder divino durante seu ministério terreno ao ter autoridade para curar doenças (
          <a href="https://www.biblegateway.com/passage/?search=Lucas+4%3A38-41&version=ARA" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Lucas 4:38-41</a>
          ) e, de maneira ainda mais profunda, ao ter a autoridade para perdoar pecados (
          <a href="https://www.biblegateway.com/passage/?search=Lucas+5%3A20-26&version=ARA" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Lucas 5:20-26</a>
          ), o que é uma prerrogativa exclusiva de Deus. Seu poder e domínio estão acima de todo principado e autoridade (
          <a href="https://www.biblegateway.com/passage/?search=Ef%C3%A9sios+1%3A20-22&version=ARA" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">Efésios 1:20-22</a>
          ).
        </>
      ),
      s2_title: "Onipresença",
      s2_p1: (
        <>
          Este atributo refere-se à <span className="bg-yellow-200/80 px-1 rounded-sm">faculdade divina de estar presente em todos os lugares ao mesmo tempo</span>. Embora em sua natureza humana Cristo tenha subido ao céu, em sua natureza divina Ele é onipresente. Ele fez esta promessa a seus seguidores:
        </>
      ),
      v2: "“Porque, onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.”",
      r2: "Mateus 18:20 (Almeida Revista e Atualizada)",
      l2: "https://www.biblegateway.com/passage/?search=Mateus+18%3A20&version=ARA",
      s2_p2_intro: "E também afirmou antes de subir:",
      v3: "“...e eis que estou convosco todos os dias até à consumação do século. Amém!”",
      r3: "Mateus 28:20 (Almeida Revista e Atualizada)",
      l3: "https://www.biblegateway.com/passage/?search=Mateus+28%3A20&version=ARA",
      s3_title: "Onisciência",
      s3_p1: (
        <>
          A onisciência indica que Cristo, como Deus, possui um <span className="bg-yellow-200/80 px-1 rounded-sm">conhecimento perfeito e infinito de todas as coisas</span>. Seus discípulos reconheceram claramente esse atributo divino quando lhe disseram:
        </>
      ),
      v4: "“Agora, vemos que sabes todas as coisas e não precisas de que alguém te interrogue; por isso, cremos que saíste de Deus.”",
      r4: "João 16:30 (Almeida Revista e Atualizada)",
      l4: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+16%3A30&version=ARA",
      s3_p2: (
        <>
          Durante seu ministério, Jesus demonstrou que conhecia plenamente o que estava oculto, incluindo os pensamentos e as intenções do coração das pessoas (
          <a href="https://www.biblegateway.com/passage/?search=Jo%C3%A3o+2%3A24-25&version=ARA" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-blue-600">João 2:24-25</a>
          ). Ao possuir onisciência, Cristo demonstra mais uma vez sua divindade absoluta.
        </>
      )
    },
    propiedades: {
      title: "V. Propriedades Divinas de Cristo",
      s1_title: "Sua própria existência",
      s1_p1: (
        <>
          Cristo não depende de nada nem de ninguém para existir; Ele possui <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">vida em si mesmo</span>. Esta autoexistência é um atributo exclusivo da Divindade. O próprio Jesus afirmou:
        </>
      ),
      v1: "“Porque, assim como o Pai tem vida em si mesmo, também concedeu ao Filho ter vida em si mesmo;”",
      r1: "João 5:26 (Almeida Revista e Atualizada)",
      l1: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+5%3A26&version=ARA",
      s2_title: "Sua imutabilidade",
      s2_p1: (
        <>
          Este atributo significa que Cristo <span className="bg-yellow-200/80 px-1 rounded-sm">não muda em seu ser, suas perfeições, seus propósitos nem suas promessas</span>. Ele é o mesmo ontem, hoje e para sempre. Em um mundo de mudanças constantes, a imutabilidade de Cristo é a âncora da nossa fé.
        </>
      ),
      v2: "“Jesus Cristo ontem e hoje é o mesmo, e o será para sempre.”",
      r2: "Hebreus 13:8 (Almeida Revista e Atualizada)",
      l2: "https://www.biblegateway.com/passage/?search=Hebreus+13%3A8&version=ARA",
      s3_title: "Sua infinitude",
      s3_p1: (
        <>
          A infinitude divina de Cristo significa que Ele não tem limites. Ela se manifesta de duas formas principais: Sua <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">perfeição absoluta</span> e Sua <span className="bg-yellow-200/80 px-1 rounded-sm font-bold">eternidade</span>. Não há fim para a Sua glória, para a Sua graça nem para o Seu ser.
        </>
      ),
      s3_p2: (
        <>
          <span className="font-bold underline">a. Sua absoluta perfeição:</span> Cristo é perfeito em todos os seus caminhos e atributos. Não há mancha nem falta nele.
        </>
      ),
      s3_p3: (
        <>
          <span className="font-bold underline">b. Sua eternidade:</span> Ele é antes de todas as coisas e subsistirá para sempre. Seu reino não terá fim.
        </>
      ),
      v3: "“Eu sou o Alfa e o Ômega, diz o Senhor Deus, aquele que é, que era e que há de vir, o Todo-Poderoso.”",
      r3: "Apocalipse 1:8 (Almeida Revista e Atualizada)",
      l3: "https://www.biblegateway.com/passage/?search=Apocalipse+1%3A8&version=ARA"
    }
  }
};
