// Detecção de dispositivo
function detectDevice() {
    const ua = navigator.userAgent;
    const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    
    let device = 'desktop';
    let os = 'unknown';
    let browser = 'unknown';
    
    // Detectar sistema operacional
    if (ua.indexOf('Win') !== -1) os = 'Windows';
    else if (ua.indexOf('Mac') !== -1) os = 'MacOS';
    else if (ua.indexOf('Linux') !== -1) os = 'Linux';
    else if (ua.indexOf('Android') !== -1) os = 'Android';
    else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) os = 'iOS';
    
    // Detectar navegador
    if (ua.indexOf('Chrome') !== -1) browser = 'Chrome';
    else if (ua.indexOf('Firefox') !== -1) browser = 'Firefox';
    else if (ua.indexOf('Safari') !== -1) browser = 'Safari';
    else if (ua.indexOf('Edge') !== -1) browser = 'Edge';
    
    // Detectar se é mobile
    const isMobile = mobileKeywords.some(keyword => ua.indexOf(keyword) !== -1) || window.innerWidth <= 768;
    
    if (isMobile) {
        if (os === 'Android') device = 'android';
        else if (os === 'iOS') device = 'ios';
        else device = 'mobile';
    }
    
    return { device, os, browser, isMobile };
}

const deviceInfo = detectDevice();
console.log(`Dispositivo detectado: ${deviceInfo.device}, OS: ${deviceInfo.os}, Browser: ${deviceInfo.browser}`);

// Adicionar classe ao body para estilização específica
document.body.classList.add(`device-${deviceInfo.device}`);
if (deviceInfo.isMobile) {
    document.body.classList.add('is-mobile');
}

// Array elementos com todos os 118 elementos
const elementos = [
    // Período 1
    {
        numero: 1,
        simbolo: "H",
        nome: "Hidrogênio",
        massa: "1.008",
        grupo: 1,
        periodo: 1,
        protons: 1,
        neutrons: 0,
        eletrons: 1,
        config: "1s¹",
        categoria: "não-metal",
        historia: "Descoberto em 1766 por Henry Cavendish. É o elemento mais abundante do universo.",
        reacoes: "Reage com oxigênio formando água. Altamente inflamável."
    },
    {
        numero: 2,
        simbolo: "He",
        nome: "Hélio",
        massa: "4.0026",
        grupo: 18,
        periodo: 1,
        protons: 2,
        neutrons: 2,
        eletrons: 2,
        config: "1s²",
        categoria: "gás-nobre",
        historia: "Descoberto em 1868 por Pierre Janssen. Segundo elemento mais abundante no universo.",
        reacoes: "Gás nobre, completamente inerte em condições normais."
    },

    // Período 2
    {
        numero: 3,
        simbolo: "Li",
        nome: "Lítio",
        massa: "6.94",
        grupo: 1,
        periodo: 2,
        protons: 3,
        neutrons: 4,
        eletrons: 3,
        config: "[He] 2s¹",
        categoria: "metal-alcalino",
        historia: "Descoberto em 1817 por Johan Arfwedson. Usado em baterias recarregáveis.",
        reacoes: "Reage violentamente com água, produzindo hidrogênio e hidróxido de lítio."
    },
    {
        numero: 4,
        simbolo: "Be",
        nome: "Berílio",
        massa: "9.012",
        grupo: 2,
        periodo: 2,
        protons: 4,
        neutrons: 5,
        eletrons: 4,
        config: "[He] 2s²",
        categoria: "metal-alcalino-terroso",
        historia: "Descoberto em 1798 por Louis-Nicolas Vauquelin. Usado em ligas metálicas.",
        reacoes: "Reage com ácidos, formando sais de berílio."
    },
    {
        numero: 5,
        simbolo: "B",
        nome: "Boro",
        massa: "10.81",
        grupo: 13,
        periodo: 2,
        protons: 5,
        neutrons: 6,
        eletrons: 5,
        config: "[He] 2s² 2p¹",
        categoria: "semimetal",
        historia: "Descoberto em 1808 por Gay-Lussac e Thénard. Usado em vidros resistentes.",
        reacoes: "Forma compostos com oxigênio em altas temperaturas."
    },
    {
        numero: 6,
        simbolo: "C",
        nome: "Carbono",
        massa: "12.011",
        grupo: 14,
        periodo: 2,
        protons: 6,
        neutrons: 6,
        eletrons: 6,
        config: "[He] 2s² 2p²",
        categoria: "não-metal",
        historia: "Conhecido desde a antiguidade. Base da vida na Terra.",
        reacoes: "Forma dióxido de carbono na combustão. Base da química orgânica."
    },
    {
        numero: 7,
        simbolo: "N",
        nome: "Nitrogênio",
        massa: "14.007",
        grupo: 15,
        periodo: 2,
        protons: 7,
        neutrons: 7,
        eletrons: 7,
        config: "[He] 2s² 2p³",
        categoria: "não-metal",
        historia: "Descoberto por Daniel Rutherford em 1772. Principal componente do ar.",
        reacoes: "Relativamente inerte, mas forma amônia com hidrogênio (processo Haber)."
    },
    {
        numero: 8,
        simbolo: "O",
        nome: "Oxigênio",
        massa: "15.999",
        grupo: 16,
        periodo: 2,
        protons: 8,
        neutrons: 8,
        eletrons: 8,
        config: "[He] 2s² 2p⁴",
        categoria: "não-metal",
        historia: "Descoberto por Joseph Priestley em 1774. Essencial para a respiração.",
        reacoes: "Suporta combustão. Forma óxidos com praticamente todos os elementos."
    },
    {
        numero: 9,
        simbolo: "F",
        nome: "Flúor",
        massa: "18.998",
        grupo: 17,
        periodo: 2,
        protons: 9,
        neutrons: 10,
        eletrons: 9,
        config: "[He] 2s² 2p⁵",
        categoria: "halogênio",
        historia: "Isolado por Henri Moissan em 1886. Elemento mais eletronegativo.",
        reacoes: "Extremamente reativo. Reage com praticamente todos os elementos."
    },
    {
        numero: 10,
        simbolo: "Ne",
        nome: "Neônio",
        massa: "20.180",
        grupo: 18,
        periodo: 2,
        protons: 10,
        neutrons: 10,
        eletrons: 10,
        config: "[He] 2s² 2p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por William Ramsay em 1898. Usado em lâmpadas neon.",
        reacoes: "Completamente inerte. Não forma compostos químicos."
    },

    // Período 3
    {
        numero: 11,
        simbolo: "Na",
        nome: "Sódio",
        massa: "22.990",
        grupo: 1,
        periodo: 3,
        protons: 11,
        neutrons: 12,
        eletrons: 11,
        config: "[Ne] 3s¹",
        categoria: "metal-alcalino",
        historia: "Isolado por Humphry Davy em 1807. Essencial para a vida.",
        reacoes: "Reage violentamente com água, produzindo hidrogênio e hidróxido de sódio."
    },
    {
        numero: 12,
        simbolo: "Mg",
        nome: "Magnésio",
        massa: "24.305",
        grupo: 2,
        periodo: 3,
        protons: 12,
        neutrons: 12,
        eletrons: 12,
        config: "[Ne] 3s²",
        categoria: "metal-alcalino-terroso",
        historia: "Reconhecido como elemento por Joseph Black em 1755. Essencial para plantas.",
        reacoes: "Reage com água quente e ácidos, liberando hidrogênio."
    },
    {
        numero: 13,
        simbolo: "Al",
        nome: "Alumínio",
        massa: "26.982",
        grupo: 13,
        periodo: 3,
        protons: 13,
        neutrons: 14,
        eletrons: 13,
        config: "[Ne] 3s² 3p¹",
        categoria: "metal",
        historia: "Isolado por Hans Christian Ørsted em 1825. Metal mais abundante na crosta.",
        reacoes: "Forma uma camada protetora de óxido. Reage com ácidos e bases."
    },
    {
        numero: 14,
        simbolo: "Si",
        nome: "Silício",
        massa: "28.086",
        grupo: 14,
        periodo: 3,
        protons: 14,
        neutrons: 14,
        eletrons: 14,
        config: "[Ne] 3s² 3p²",
        categoria: "semimetal",
        historia: "Identificado por Jöns Jacob Berzelius em 1824. Base da indústria eletrônica.",
        reacoes: "Reage com oxigênio em altas temperaturas formando dióxido de silício."
    },
    {
        numero: 15,
        simbolo: "P",
        nome: "Fósforo",
        massa: "30.974",
        grupo: 15,
        periodo: 3,
        protons: 15,
        neutrons: 16,
        eletrons: 15,
        config: "[Ne] 3s² 3p³",
        categoria: "não-metal",
        historia: "Descoberto por Hennig Brand em 1669. Essencial para o DNA e ATP.",
        reacoes: "Branco é pirofórico (inflama no ar). Forma óxidos com oxigênio."
    },
    {
        numero: 16,
        simbolo: "S",
        nome: "Enxofre",
        massa: "32.06",
        grupo: 16,
        periodo: 3,
        protons: 16,
        neutrons: 16,
        eletrons: 16,
        config: "[Ne] 3s² 3p⁴",
        categoria: "não-metal",
        historia: "Conhecido desde a antiguidade. Mencionado na Bíblia como 'enxofre'.",
        reacoes: "Queima com chama azul formando dióxido de enxofre."
    },
    {
        numero: 17,
        simbolo: "Cl",
        nome: "Cloro",
        massa: "35.45",
        grupo: 17,
        periodo: 3,
        protons: 17,
        neutrons: 18,
        eletrons: 17,
        config: "[Ne] 3s² 3p⁵",
        categoria: "halogênio",
        historia: "Descoberto por Carl Wilhelm Scheele em 1774. Usado em desinfetantes.",
        reacoes: "Gás verde-amarelado tóxico. Reage com metais formando cloretos."
    },
    {
        numero: 18,
        simbolo: "Ar",
        nome: "Argônio",
        massa: "39.948",
        grupo: 18,
        periodo: 3,
        protons: 18,
        neutrons: 22,
        eletrons: 18,
        config: "[Ne] 3s² 3p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por Lord Rayleigh e William Ramsay em 1894.",
        reacoes: "Completamente inerte. Usado em lâmpadas incandescentes."
    },

    // Período 4
    {
        numero: 19,
        simbolo: "K",
        nome: "Potássio",
        massa: "39.098",
        grupo: 1,
        periodo: 4,
        protons: 19,
        neutrons: 20,
        eletrons: 19,
        config: "[Ar] 4s¹",
        categoria: "metal-alcalino",
        historia: "Isolado por Humphry Davy em 1807. Essencial para impulsos nervosos.",
        reacoes: "Reage violentamente com água, podendo inflamar o hidrogênio produzido."
    },
    {
        numero: 20,
        simbolo: "Ca",
        nome: "Cálcio",
        massa: "40.078",
        grupo: 2,
        periodo: 4,
        protons: 20,
        neutrons: 20,
        eletrons: 20,
        config: "[Ar] 4s²",
        categoria: "metal-alcalino-terroso",
        historia: "Isolado por Humphry Davy em 1808. Essencial para ossos e dentes.",
        reacoes: "Reage com água formando hidróxido de cálcio e hidrogênio."
    },
    {
        numero: 21,
        simbolo: "Sc",
        nome: "Escândio",
        massa: "44.956",
        grupo: 3,
        periodo: 4,
        protons: 21,
        neutrons: 24,
        eletrons: 21,
        config: "[Ar] 3d¹ 4s²",
        categoria: "metal-transição",
        historia: "Descoberto por Lars Fredrik Nilson em 1879. Usado em ligas de alumínio.",
        reacoes: "Forma compostos com halogênios. Relativamente estável no ar."
    },
    {
        numero: 22,
        simbolo: "Ti",
        nome: "Titânio",
        massa: "47.867",
        grupo: 4,
        periodo: 4,
        protons: 22,
        neutrons: 26,
        eletrons: 22,
        config: "[Ar] 3d² 4s²",
        categoria: "metal-transição",
        historia: "Descoberto por William Gregor em 1791. Metal forte e leve.",
        reacoes: "Resistente à corrosão devido à camada de óxido. Reage com ácidos."
    },
    {
        numero: 23,
        simbolo: "V",
        nome: "Vanádio",
        massa: "50.942",
        grupo: 5,
        periodo: 4,
        protons: 23,
        neutrons: 28,
        eletrons: 23,
        config: "[Ar] 3d³ 4s²",
        categoria: "metal-transição",
        historia: "Descoberto por Andrés Manuel del Río em 1801. Usado em aços especiais.",
        reacoes: "Resistente à corrosão. Forma compostos coloridos."
    },
    {
        numero: 24,
        simbolo: "Cr",
        nome: "Cromo",
        massa: "51.996",
        grupo: 6,
        periodo: 4,
        protons: 24,
        neutrons: 28,
        eletrons: 24,
        config: "[Ar] 3d⁵ 4s¹",
        categoria: "metal-transição",
        historia: "Descoberto por Louis-Nicolas Vauquelin em 1797. Usado em cromagem.",
        reacoes: "Forma uma camada protetora de óxido. Resistente à corrosão."
    },
    {
        numero: 25,
        simbolo: "Mn",
        nome: "Manganês",
        massa: "54.938",
        grupo: 7,
        periodo: 4,
        protons: 25,
        neutrons: 30,
        eletrons: 25,
        config: "[Ar] 3d⁵ 4s²",
        categoria: "metal-transição",
        historia: "Isolado por Johann Gottlieb Gahn em 1774. Essencial para plantas.",
        reacoes: "Reage com ácidos. Forma compostos com vários estados de oxidação."
    },
    {
        numero: 26,
        simbolo: "Fe",
        nome: "Ferro",
        massa: "55.845",
        grupo: 8,
        periodo: 4,
        protons: 26,
        neutrons: 30,
        eletrons: 26,
        config: "[Ar] 3d⁶ 4s²",
        categoria: "metal-transição",
        historia: "Conhecido desde a pré-história. Essencial para a hemoglobina.",
        reacoes: "Enferruja na presença de oxigênio e água. Reage com ácidos."
    },
    {
        numero: 27,
        simbolo: "Co",
        nome: "Cobalto",
        massa: "58.933",
        grupo: 9,
        periodo: 4,
        protons: 27,
        neutrons: 32,
        eletrons: 27,
        config: "[Ar] 3d⁷ 4s²",
        categoria: "metal-transição",
        historia: "Descoberto por Georg Brandt em 1735. Usado em ligas magnéticas.",
        reacoes: "Resistente à oxidação. Forma compostos azuis característicos."
    },
    {
        numero: 28,
        simbolo: "Ni",
        nome: "Níquel",
        massa: "58.693",
        grupo: 10,
        periodo: 4,
        protons: 28,
        neutrons: 31,
        eletrons: 28,
        config: "[Ar] 3d⁸ 4s²",
        categoria: "metal-transição",
        historia: "Isolado por Axel Fredrik Cronstedt em 1751. Usado em aço inoxidável.",
        reacoes: "Resistente à corrosão. Forma compostos verdes."
    },
    {
        numero: 29,
        simbolo: "Cu",
        nome: "Cobre",
        massa: "63.546",
        grupo: 11,
        periodo: 4,
        protons: 29,
        neutrons: 35,
        eletrons: 29,
        config: "[Ar] 3d¹⁰ 4s¹",
        categoria: "metal-transição",
        historia: "Conhecido desde 9000 a.C. Primeiro metal usado por humanos.",
        reacoes: "Oxida formando uma pátina verde. Excelente condutor elétrico."
    },
    {
        numero: 30,
        simbolo: "Zn",
        nome: "Zinco",
        massa: "65.38",
        grupo: 12,
        periodo: 4,
        protons: 30,
        neutrons: 35,
        eletrons: 30,
        config: "[Ar] 3d¹⁰ 4s²",
        categoria: "metal-transição",
        historia: "Usado desde a antiguidade na produção de latão. Essencial para enzimas.",
        reacoes: "Reage com ácidos liberando hidrogênio. Usado em galvanização."
    },
    {
        numero: 31,
        simbolo: "Ga",
        nome: "Gálio",
        massa: "69.723",
        grupo: 13,
        periodo: 4,
        protons: 31,
        neutrons: 39,
        eletrons: 31,
        config: "[Ar] 3d¹⁰ 4s² 4p¹",
        categoria: "metal",
        historia: "Descoberto por Paul-Émile Lecoq de Boisbaudran em 1875. Derrete na mão.",
        reacoes: "Forma compostos com arsênio (arsenieto de gálio) usados em semicondutores."
    },
    {
        numero: 32,
        simbolo: "Ge",
        nome: "Germânio",
        massa: "72.63",
        grupo: 14,
        periodo: 4,
        protons: 32,
        neutrons: 41,
        eletrons: 32,
        config: "[Ar] 3d¹⁰ 4s² 4p²",
        categoria: "semimetal",
        historia: "Descoberto por Clemens Winkler em 1886. Usado nos primeiros transistores.",
        reacoes: "Forma dióxido de germânio. Semicondutor importante."
    },
    {
        numero: 33,
        simbolo: "As",
        nome: "Arsênio",
        massa: "74.922",
        grupo: 15,
        periodo: 4,
        protons: 33,
        neutrons: 42,
        eletrons: 33,
        config: "[Ar] 3d¹⁰ 4s² 4p³",
        categoria: "semimetal",
        historia: "Conhecido desde a antiguidade. Usado como veneno e em semicondutores.",
        reacoes: "Forma óxido de arsênio (trióxido de arsênio) quando queimado."
    },
    {
        numero: 34,
        simbolo: "Se",
        nome: "Selênio",
        massa: "78.96",
        grupo: 16,
        periodo: 4,
        protons: 34,
        neutrons: 45,
        eletrons: 34,
        config: "[Ar] 3d¹⁰ 4s² 4p⁴",
        categoria: "não-metal",
        historia: "Descoberto por Jöns Jacob Berzelius em 1817. Essencial em traços para a saúde.",
        reacoes: "Queima com chama azul formando dióxido de selênio."
    },
    {
        numero: 35,
        simbolo: "Br",
        nome: "Bromo",
        massa: "79.904",
        grupo: 17,
        periodo: 4,
        protons: 35,
        neutrons: 45,
        eletrons: 35,
        config: "[Ar] 3d¹⁰ 4s² 4p⁵",
        categoria: "halogênio",
        historia: "Descoberto por Antoine Balard em 1826. Único halogênio líquido à temperatura ambiente.",
        reacoes: "Líquido vermelho volátil. Reage com metais formando brometos."
    },
    {
        numero: 36,
        simbolo: "Kr",
        nome: "Criptônio",
        massa: "83.798",
        grupo: 18,
        periodo: 4,
        protons: 36,
        neutrons: 48,
        eletrons: 36,
        config: "[Ar] 3d¹⁰ 4s² 4p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por William Ramsay e Morris Travers em 1898. Usado em lasers.",
        reacoes: "Quase inerte, mas forma alguns compostos com flúor."
    },

    // Período 5
    {
        numero: 37,
        simbolo: "Rb",
        nome: "Rubídio",
        massa: "85.468",
        grupo: 1,
        periodo: 5,
        protons: 37,
        neutrons: 48,
        eletrons: 37,
        config: "[Kr] 5s¹",
        categoria: "metal-alcalino",
        historia: "Descoberto por Robert Bunsen e Gustav Kirchhoff em 1861.",
        reacoes: "Reage violentamente com água, mais reativo que potássio."
    },
    {
        numero: 38,
        simbolo: "Sr",
        nome: "Estrôncio",
        massa: "87.62",
        grupo: 2,
        periodo: 5,
        protons: 38,
        neutrons: 50,
        eletrons: 38,
        config: "[Kr] 5s²",
        categoria: "metal-alcalino-terroso",
        historia: "Descoberto por Adair Crawford em 1790. Usado em fogos de artifício vermelhos.",
        reacoes: "Reage com água formando hidróxido de estrôncio e hidrogênio."
    },
    {
        numero: 39,
        simbolo: "Y",
        nome: "Ítrio",
        massa: "88.906",
        grupo: 3,
        periodo: 5,
        protons: 39,
        neutrons: 50,
        eletrons: 39,
        config: "[Kr] 4d¹ 5s²",
        categoria: "metal-transição",
        historia: "Descoberto por Johan Gadolin em 1794. Usado em lasers e supercondutores.",
        reacoes: "Forma óxido de ítrio. Relativamente estável no ar."
    },
    {
        numero: 40,
        simbolo: "Zr",
        nome: "Zircônio",
        massa: "91.224",
        grupo: 4,
        periodo: 5,
        protons: 40,
        neutrons: 51,
        eletrons: 40,
        config: "[Kr] 4d² 5s²",
        categoria: "metal-transição",
        historia: "Descoberto por Martin Heinrich Klaproth em 1789. Usado em reatores nucleares.",
        reacoes: "Resistente à corrosão. Forma compostos com oxigênio."
    },
    {
        numero: 41,
        simbolo: "Nb",
        nome: "Nióbio",
        massa: "92.906",
        grupo: 5,
        periodo: 5,
        protons: 41,
        neutrons: 52,
        eletrons: 41,
        config: "[Kr] 4d⁴ 5s¹",
        categoria: "metal-transição",
        historia: "Descoberto por Charles Hatchett em 1801. Brasil é o maior produtor mundial.",
        reacoes: "Resistente à corrosão. Usado em ligas especiais."
    },
    {
        numero: 42,
        simbolo: "Mo",
        nome: "Molibdênio",
        massa: "95.95",
        grupo: 6,
        periodo: 5,
        protons: 42,
        neutrons: 54,
        eletrons: 42,
        config: "[Kr] 4d⁵ 5s¹",
        categoria: "metal-transição",
        historia: "Isolado por Peter Jacob Hjelm em 1781. Essencial para enzimas.",
        reacoes: "Resistente a altas temperaturas. Forma compostos com enxofre."
    },
    {
        numero: 43,
        simbolo: "Tc",
        nome: "Tecnécio",
        massa: "98",
        grupo: 7,
        periodo: 5,
        protons: 43,
        neutrons: 55,
        eletrons: 43,
        config: "[Kr] 4d⁵ 5s²",
        categoria: "metal-transição",
        historia: "Descoberto por Carlo Perrier e Emilio Segrè em 1937. Primeiro elemento artificial.",
        reacoes: "Radioativo. Usado em medicina nuclear para diagnósticos."
    },
    {
        numero: 44,
        simbolo: "Ru",
        nome: "Rutênio",
        massa: "101.07",
        grupo: 8,
        periodo: 5,
        protons: 44,
        neutrons: 57,
        eletrons: 44,
        config: "[Kr] 4d⁷ 5s¹",
        categoria: "metal-transição",
        historia: "Descoberto por Karl Ernst Claus em 1844. Metal do grupo da platina.",
        reacoes: "Resistente à corrosão. Usado como catalisador."
    },
    {
        numero: 45,
        simbolo: "Rh",
        nome: "Ródio",
        massa: "102.91",
        grupo: 9,
        periodo: 5,
        protons: 45,
        neutrons: 58,
        eletrons: 45,
        config: "[Kr] 4d⁸ 5s¹",
        categoria: "metal-transição",
        historia: "Descoberto por William Hyde Wollaston em 1803. Metal mais caro do mundo.",
        reacoes: "Extremamente resistente à corrosão. Usado em conversores catalíticos."
    },
    {
        numero: 46,
        simbolo: "Pd",
        nome: "Paládio",
        massa: "106.42",
        grupo: 10,
        periodo: 5,
        protons: 46,
        neutrons: 60,
        eletrons: 46,
        config: "[Kr] 4d¹⁰",
        categoria: "metal-transição",
        historia: "Descoberto por William Hyde Wollaston em 1803. Absorve hidrogênio.",
        reacoes: "Resistente à corrosão. Usado em catálise e joalheria."
    },
    {
        numero: 47,
        simbolo: "Ag",
        nome: "Prata",
        massa: "107.87",
        grupo: 11,
        periodo: 5,
        protons: 47,
        neutrons: 61,
        eletrons: 47,
        config: "[Kr] 4d¹⁰ 5s¹",
        categoria: "metal-transição",
        historia: "Conhecida desde 4000 a.C. Melhor condutora elétrica e térmica.",
        reacoes: "Escurece na presença de compostos de enxofre. Resistente à oxidação."
    },
    {
        numero: 48,
        simbolo: "Cd",
        nome: "Cádmio",
        massa: "112.41",
        grupo: 12,
        periodo: 5,
        protons: 48,
        neutrons: 64,
        eletrons: 48,
        config: "[Kr] 4d¹⁰ 5s²",
        categoria: "metal-transição",
        historia: "Descoberto por Friedrich Strohmeyer em 1817. Usado em baterias.",
        reacoes: "Tóxico. Forma compostos com oxigênio e enxofre."
    },
    {
        numero: 49,
        simbolo: "In",
        nome: "Índio",
        massa: "114.82",
        grupo: 13,
        periodo: 5,
        protons: 49,
        neutrons: 66,
        eletrons: 49,
        config: "[Kr] 4d¹⁰ 5s² 5p¹",
        categoria: "metal",
        historia: "Descoberto por Ferdinand Reich e Hieronymous Richter em 1863.",
        reacoes: "Usado em telas de toque e soldas especiais. Maleável."
    },
    {
        numero: 50,
        simbolo: "Sn",
        nome: "Estanho",
        massa: "118.71",
        grupo: 14,
        periodo: 5,
        protons: 50,
        neutrons: 69,
        eletrons: 50,
        config: "[Kr] 4d¹⁰ 5s² 5p²",
        categoria: "metal",
        historia: "Conhecido desde 3500 a.C. Usado em ligas de bronze.",
        reacoes: "Resistente à corrosão. Forma dióxido de estanho."
    },
    {
        numero: 51,
        simbolo: "Sb",
        nome: "Antimônio",
        massa: "121.76",
        grupo: 15,
        periodo: 5,
        protons: 51,
        neutrons: 71,
        eletrons: 51,
        config: "[Kr] 4d¹⁰ 5s² 5p³",
        categoria: "semimetal",
        historia: "Conhecido desde a antiguidade. Usado em retardantes de chamas.",
        reacoes: "Forma trióxido de antimônio quando queimado."
    },
    {
        numero: 52,
        simbolo: "Te",
        nome: "Telúrio",
        massa: "127.60",
        grupo: 16,
        periodo: 5,
        protons: 52,
        neutrons: 76,
        eletrons: 52,
        config: "[Kr] 4d¹⁰ 5s² 5p⁴",
        categoria: "semimetal",
        historia: "Descoberto por Franz-Joseph Müller von Reichenstein em 1782.",
        reacoes: "Forma compostos com oxigênio e hidrogênio."
    },
    {
        numero: 53,
        simbolo: "I",
        nome: "Iodo",
        massa: "126.90",
        grupo: 17,
        periodo: 5,
        protons: 53,
        neutrons: 74,
        eletrons: 53,
        config: "[Kr] 4d¹⁰ 5s² 5p⁵",
        categoria: "halogênio",
        historia: "Descoberto por Bernard Courtois em 1811. Essencial para a tireoide.",
        reacoes: "Sublima à temperatura ambiente. Reage com amido formando cor azul."
    },
    {
        numero: 54,
        simbolo: "Xe",
        nome: "Xenônio",
        massa: "131.29",
        grupo: 18,
        periodo: 5,
        protons: 54,
        neutrons: 77,
        eletrons: 54,
        config: "[Kr] 4d¹⁰ 5s² 5p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por William Ramsay e Morris Travers em 1898.",
        reacoes: "Forma alguns compostos com flúor e oxigênio, diferente de outros gases nobres."
    },

    // Período 6 (incluindo Lantanídeos)
    {
        numero: 55,
        simbolo: "Cs",
        nome: "Césio",
        massa: "132.91",
        grupo: 1,
        periodo: 6,
        protons: 55,
        neutrons: 78,
        eletrons: 55,
        config: "[Xe] 6s¹",
        categoria: "metal-alcalino",
        historia: "Descoberto por Robert Bunsen e Gustav Kirchhoff em 1860. Mais reativo dos metais.",
        reacoes: "Reage explosivamente com água. Usado em relógios atômicos."
    },
    {
        numero: 56,
        simbolo: "Ba",
        nome: "Bário",
        massa: "137.33",
        grupo: 2,
        periodo: 6,
        protons: 56,
        neutrons: 81,
        eletrons: 56,
        config: "[Xe] 6s²",
        categoria: "metal-alcalino-terroso",
        historia: "Identificado por Humphry Davy em 1808. Usado em exames de raio-X.",
        reacoes: "Reage com água formando hidróxido de bário. Compostos são tóxicos."
    },
    {
        numero: 57,
        simbolo: "La",
        nome: "Lantânio",
        massa: "138.91",
        grupo: 3,
        periodo: 6,
        protons: 57,
        neutrons: 82,
        eletrons: 57,
        config: "[Xe] 5d¹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Carl Gustaf Mosander em 1839. Primeiro dos lantanídeos.",
        reacoes: "Forma compostos com oxigênio e halogênios. Usado em ligas."
    },

    // Lantanídeos (58-71)
    {
        numero: 58,
        simbolo: "Ce",
        nome: "Cério",
        massa: "140.12",
        grupo: 3,
        periodo: 6,
        protons: 58,
        neutrons: 82,
        eletrons: 58,
        config: "[Xe] 4f¹ 5d¹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Jöns Jacob Berzelius e Wilhelm Hisinger em 1803.",
        reacoes: "Oxida facilmente no ar. Usado em pedras de isqueiro."
    },
    {
        numero: 59,
        simbolo: "Pr",
        nome: "Praseodímio",
        massa: "140.91",
        grupo: 3,
        periodo: 6,
        protons: 59,
        neutrons: 82,
        eletrons: 59,
        config: "[Xe] 4f³ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Carl Auer von Welsbach em 1885.",
        reacoes: "Forma compostos verdes. Usado em ligas para ímãs."
    },
    {
        numero: 60,
        simbolo: "Nd",
        nome: "Neodímio",
        massa: "144.24",
        grupo: 3,
        periodo: 6,
        protons: 60,
        neutrons: 84,
        eletrons: 60,
        config: "[Xe] 4f⁴ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Carl Auer von Welsbach em 1885.",
        reacoes: "Usado nos ímãs mais fortes conhecidos (ímãs de neodímio)."
    },
    {
        numero: 61,
        simbolo: "Pm",
        nome: "Promécio",
        massa: "145",
        grupo: 3,
        periodo: 6,
        protons: 61,
        neutrons: 84,
        eletrons: 61,
        config: "[Xe] 4f⁵ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Jacob Marinsky, Lawrence Glendenin e Charles Coryell em 1945.",
        reacoes: "Radioativo. Usado em baterias nucleares."
    },
    {
        numero: 62,
        simbolo: "Sm",
        nome: "Samário",
        massa: "150.36",
        grupo: 3,
        periodo: 6,
        protons: 62,
        neutrons: 88,
        eletrons: 62,
        config: "[Xe] 4f⁶ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Paul-Émile Lecoq de Boisbaudran em 1879.",
        reacoes: "Usado em ímãs resistentes a altas temperaturas."
    },
    {
        numero: 63,
        simbolo: "Eu",
        nome: "Európio",
        massa: "151.96",
        grupo: 3,
        periodo: 6,
        protons: 63,
        neutrons: 89,
        eletrons: 63,
        config: "[Xe] 4f⁷ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Eugène-Anatole Demarçay em 1901.",
        reacoes: "Usado em fósforos vermelhos para TVs e telas."
    },
    {
        numero: 64,
        simbolo: "Gd",
        nome: "Gadolínio",
        massa: "157.25",
        grupo: 3,
        periodo: 6,
        protons: 64,
        neutrons: 93,
        eletrons: 64,
        config: "[Xe] 4f⁷ 5d¹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Jean Charles Galissard de Marignac em 1880.",
        reacoes: "Usado em ressonância magnética como contraste."
    },
    {
        numero: 65,
        simbolo: "Tb",
        nome: "Térbio",
        massa: "158.93",
        grupo: 3,
        periodo: 6,
        protons: 65,
        neutrons: 94,
        eletrons: 65,
        config: "[Xe] 4f⁹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Carl Gustaf Mosander em 1843.",
        reacoes: "Usado em ligas para dispositivos magnetostritivos."
    },
    {
        numero: 66,
        simbolo: "Dy",
        nome: "Disprósio",
        massa: "162.50",
        grupo: 3,
        periodo: 6,
        protons: 66,
        neutrons: 96,
        eletrons: 66,
        config: "[Xe] 4f¹⁰ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Paul-Émile Lecoq de Boisbaudran em 1886.",
        reacoes: "Usado em ímãs de neodímio para melhorar resistência térmica."
    },
    {
        numero: 67,
        simbolo: "Ho",
        nome: "Hólmio",
        massa: "164.93",
        grupo: 3,
        periodo: 6,
        protons: 67,
        neutrons: 98,
        eletrons: 67,
        config: "[Xe] 4f¹¹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Per Teodor Cleve em 1879.",
        reacoes: "Tem o maior momento magnético de qualquer elemento."
    },
    {
        numero: 68,
        simbolo: "Er",
        nome: "Érbio",
        massa: "167.26",
        grupo: 3,
        periodo: 6,
        protons: 68,
        neutrons: 99,
        eletrons: 68,
        config: "[Xe] 4f¹² 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Carl Gustaf Mosander em 1843.",
        reacoes: "Usado em amplificadores de fibra óptica."
    },
    {
        numero: 69,
        simbolo: "Tm",
        nome: "Túlio",
        massa: "168.93",
        grupo: 3,
        periodo: 6,
        protons: 69,
        neutrons: 100,
        eletrons: 69,
        config: "[Xe] 4f¹³ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Per Teodor Cleve em 1879.",
        reacoes: "Metal caro e raro. Usado em lasers portáteis."
    },
    {
        numero: 70,
        simbolo: "Yb",
        nome: "Itérbio",
        massa: "173.05",
        grupo: 3,
        periodo: 6,
        protons: 70,
        neutrons: 103,
        eletrons: 70,
        config: "[Xe] 4f¹⁴ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Jean Charles Galissard de Marignac em 1878.",
        reacoes: "Usado em ligas de aço inoxidável e lasers."
    },
    {
        numero: 71,
        simbolo: "Lu",
        nome: "Lutécio",
        massa: "174.97",
        grupo: 3,
        periodo: 6,
        protons: 71,
        neutrons: 104,
        eletrons: 71,
        config: "[Xe] 4f¹⁴ 5d¹ 6s²",
        categoria: "lantanídeo",
        historia: "Descoberto por Georges Urbain e Carl Auer von Welsbach em 1907.",
        reacoes: "Último dos lantanídeos. Usado em tomografia por emissão de pósitrons."
    },

    // Continuação Período 6 (72-86)
    {
        numero: 72,
        simbolo: "Hf",
        nome: "Háfnio",
        massa: "178.49",
        grupo: 4,
        periodo: 6,
        protons: 72,
        neutrons: 106,
        eletrons: 72,
        config: "[Xe] 4f¹⁴ 5d² 6s²",
        categoria: "metal-transição",
        historia: "Descoberto por Dirk Coster e George de Hevesy em 1923.",
        reacoes: "Usado em barras de controle de reatores nucleares."
    },
    {
        numero: 73,
        simbolo: "Ta",
        nome: "Tântalo",
        massa: "180.95",
        grupo: 5,
        periodo: 6,
        protons: 73,
        neutrons: 108,
        eletrons: 73,
        config: "[Xe] 4f¹⁴ 5d³ 6s²",
        categoria: "metal-transição",
        historia: "Descoberto por Anders Gustaf Ekeberg em 1802.",
        reacoes: "Extremamente resistente à corrosão. Usado em capacitores."
    },
    {
        numero: 74,
        simbolo: "W",
        nome: "Tungstênio",
        massa: "183.84",
        grupo: 6,
        periodo: 6,
        protons: 74,
        neutrons: 110,
        eletrons: 74,
        config: "[Xe] 4f¹⁴ 5d⁴ 6s²",
        categoria: "metal-transição",
        historia: "Identificado por Carl Wilhelm Scheele em 1781. Maior ponto de fusão.",
        reacoes: "Resistente à oxidação. Usado em filamentos de lâmpadas."
    },
    {
        numero: 75,
        simbolo: "Re",
        nome: "Rênio",
        massa: "186.21",
        grupo: 7,
        periodo: 6,
        protons: 75,
        neutrons: 111,
        eletrons: 75,
        config: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        categoria: "metal-transição",
        historia: "Descoberto por Walter Noddack, Ida Tacke e Otto Berg em 1925.",
        reacoes: "Alto ponto de fusão. Usado em ligas de alta temperatura."
    },
    {
        numero: 76,
        simbolo: "Os",
        nome: "Ósmio",
        massa: "190.23",
        grupo: 8,
        periodo: 6,
        protons: 76,
        neutrons: 114,
        eletrons: 76,
        config: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        categoria: "metal-transição",
        historia: "Descoberto por Smithson Tennant em 1803. Elemento mais denso.",
        reacoes: "Forma tetróxido de ósmio tóxico. Resistente à corrosão."
    },
    {
        numero: 77,
        simbolo: "Ir",
        nome: "Irídio",
        massa: "192.22",
        grupo: 9,
        periodo: 6,
        protons: 77,
        neutrons: 115,
        eletrons: 77,
        config: "[Xe] 4f¹⁴ 5d⁷ 6s²",
        categoria: "metal-transição",
        historia: "Descoberto por Smithson Tennant em 1803. Metal mais resistente à corrosão.",
        reacoes: "Usado em velas de ignição e crucífos de laboratório."
    },
    {
        numero: 78,
        simbolo: "Pt",
        nome: "Platina",
        massa: "195.08",
        grupo: 10,
        periodo: 6,
        protons: 78,
        neutrons: 117,
        eletrons: 78,
        config: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        categoria: "metal-transição",
        historia: "Usada por civilizações pré-colombianas. Descoberta por europeus em 1735.",
        reacoes: "Excelente catalisador. Resistente à oxidação."
    },
    {
        numero: 79,
        simbolo: "Au",
        nome: "Ouro",
        massa: "196.97",
        grupo: 11,
        periodo: 6,
        protons: 79,
        neutrons: 118,
        eletrons: 79,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        categoria: "metal-transição",
        historia: "Conhecido desde 4000 a.C. Metal mais maleável e dúctil.",
        reacoes: "Não oxida. Dissolve-se em água régia (HCl + HNO₃)."
    },
    {
        numero: 80,
        simbolo: "Hg",
        nome: "Mercúrio",
        massa: "200.59",
        grupo: 12,
        periodo: 6,
        protons: 80,
        neutrons: 121,
        eletrons: 80,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        categoria: "metal-transição",
        historia: "Conhecido desde a antiguidade. Único metal líquido à temperatura ambiente.",
        reacoes: "Forma amálgamas com outros metais. Tóxico."
    },
    {
        numero: 81,
        simbolo: "Tl",
        nome: "Tálio",
        massa: "204.38",
        grupo: 13,
        periodo: 6,
        protons: 81,
        neutrons: 123,
        eletrons: 81,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        categoria: "metal",
        historia: "Descoberto por William Crookes em 1861. Extremamente tóxico.",
        reacoes: "Oxida facilmente no ar. Compostos são venenosos."
    },
    {
        numero: 82,
        simbolo: "Pb",
        nome: "Chumbo",
        massa: "207.2",
        grupo: 14,
        periodo: 6,
        protons: 82,
        neutrons: 125,
        eletrons: 82,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        categoria: "metal",
        historia: "Conhecido desde 7000 a.C. Usado em tubulações na Roma antiga.",
        reacoes: "Resistente à corrosão. Forma uma camada protetora de óxido."
    },
    {
        numero: 83,
        simbolo: "Bi",
        nome: "Bismuto",
        massa: "208.98",
        grupo: 15,
        periodo: 6,
        protons: 83,
        neutrons: 126,
        eletrons: 83,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        categoria: "metal",
        historia: "Conhecido desde a Idade Média. Usado em medicamentos.",
        reacoes: "Forma cristais iridescentes. Baixa toxicidade."
    },
    {
        numero: 84,
        simbolo: "Po",
        nome: "Polônio",
        massa: "209",
        grupo: 16,
        periodo: 6,
        protons: 84,
        neutrons: 125,
        eletrons: 84,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        categoria: "semimetal",
        historia: "Descoberto por Marie e Pierre Curie em 1898. Altamente radioativo.",
        reacoes: "Usado em fontes de nêutrons. Muito perigoso."
    },
    {
        numero: 85,
        simbolo: "At",
        nome: "Astato",
        massa: "210",
        grupo: 17,
        periodo: 6,
        protons: 85,
        neutrons: 125,
        eletrons: 85,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        categoria: "halogênio",
        historia: "Descoberto por Dale Corson, Kenneth MacKenzie e Emilio Segrè em 1940.",
        reacoes: "Elemento mais raro na crosta terrestre. Radioativo."
    },
    {
        numero: 86,
        simbolo: "Rn",
        nome: "Radônio",
        massa: "222",
        grupo: 18,
        periodo: 6,
        protons: 86,
        neutrons: 136,
        eletrons: 86,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por Friedrich Ernst Dorn em 1900. Gás radioativo.",
        reacoes: "Decai em partículas alfa. Segunda maior causa de câncer de pulmão."
    },

    // Período 7 (incluindo Actinídeos)
    {
        numero: 87,
        simbolo: "Fr",
        nome: "Frâncio",
        massa: "223",
        grupo: 1,
        periodo: 7,
        protons: 87,
        neutrons: 136,
        eletrons: 87,
        config: "[Rn] 7s¹",
        categoria: "metal-alcalino",
        historia: "Descoberto por Marguerite Perey em 1939. Elemento mais instável.",
        reacoes: "Altamente radioativo. Menos de 30g na crosta terrestre."
    },
    {
        numero: 88,
        simbolo: "Ra",
        nome: "Rádio",
        massa: "226",
        grupo: 2,
        periodo: 7,
        protons: 88,
        neutrons: 138,
        eletrons: 88,
        config: "[Rn] 7s²",
        categoria: "metal-alcalino-terroso",
        historia: "Descoberto por Marie e Pierre Curie em 1898. Usado em tratamentos de câncer.",
        reacoes: "Radioativo. Brilha no escuro devido à radiação."
    },
    {
        numero: 89,
        simbolo: "Ac",
        nome: "Actínio",
        massa: "227",
        grupo: 3,
        periodo: 7,
        protons: 89,
        neutrons: 138,
        eletrons: 89,
        config: "[Rn] 6d¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por André-Louis Debierne em 1899. Dá nome à série dos actinídeos.",
        reacoes: "Altamente radioativo. Brilha azul no escuro."
    },

    // Actinídeos (90-103)
    {
        numero: 90,
        simbolo: "Th",
        nome: "Tório",
        massa: "232.04",
        grupo: 3,
        periodo: 7,
        protons: 90,
        neutrons: 142,
        eletrons: 90,
        config: "[Rn] 6d² 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Jöns Jacob Berzelius em 1829. Alternativa para energia nuclear.",
        reacoes: "Radioativo. Usado em mantas de lampiões a gás."
    },
    {
        numero: 91,
        simbolo: "Pa",
        nome: "Protactínio",
        massa: "231.04",
        grupo: 3,
        periodo: 7,
        protons: 91,
        neutrons: 140,
        eletrons: 91,
        config: "[Rn] 5f² 6d¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Otto Hahn e Lise Meitner em 1917.",
        reacoes: "Radioativo. Raro e caro."
    },
    {
        numero: 92,
        simbolo: "U",
        nome: "Urânio",
        massa: "238.03",
        grupo: 3,
        periodo: 7,
        protons: 92,
        neutrons: 146,
        eletrons: 92,
        config: "[Rn] 5f³ 6d¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Martin Heinrich Klaproth em 1789. Usado em bombas atômicas.",
        reacoes: "Radioativo. Usado como combustível nuclear."
    },
    {
        numero: 93,
        simbolo: "Np",
        nome: "Netúnio",
        massa: "237",
        grupo: 3,
        periodo: 7,
        protons: 93,
        neutrons: 144,
        eletrons: 93,
        config: "[Rn] 5f⁴ 6d¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Edwin McMillan e Philip Abelson em 1940.",
        reacoes: "Primeiro elemento transurânico sintético."
    },
    {
        numero: 94,
        simbolo: "Pu",
        nome: "Plutônio",
        massa: "244",
        grupo: 3,
        periodo: 7,
        protons: 94,
        neutrons: 150,
        eletrons: 94,
        config: "[Rn] 5f⁶ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Glenn Seaborg e equipe em 1940. Usado em bombas nucleares.",
        reacoes: "Altamente tóxico e radioativo. Usado em geradores termoelétricos."
    },
    {
        numero: 95,
        simbolo: "Am",
        nome: "Amerício",
        massa: "243",
        grupo: 3,
        periodo: 7,
        protons: 95,
        neutrons: 148,
        eletrons: 95,
        config: "[Rn] 5f⁷ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Glenn Seaborg e equipe em 1944. Usado em detectores de fumaça.",
        reacoes: "Emite radiação alfa. Usado em medidores de espessura."
    },
    {
        numero: 96,
        simbolo: "Cm",
        nome: "Cúrio",
        massa: "247",
        grupo: 3,
        periodo: 7,
        protons: 96,
        neutrons: 151,
        eletrons: 96,
        config: "[Rn] 5f⁷ 6d¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Glenn Seaborg e equipe em 1944. Nomeado em homenagem aos Curie.",
        reacoes: "Usado em geradores termoelétricos para sondas espaciais."
    },
    {
        numero: 97,
        simbolo: "Bk",
        nome: "Berquélio",
        massa: "247",
        grupo: 3,
        periodo: 7,
        protons: 97,
        neutrons: 150,
        eletrons: 97,
        config: "[Rn] 5f⁹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Glenn Seaborg e equipe em 1949 em Berkeley.",
        reacoes: "Produzido em quantidades microscópicas."
    },
    {
        numero: 98,
        simbolo: "Cf",
        nome: "Califórnio",
        massa: "251",
        grupo: 3,
        periodo: 7,
        protons: 98,
        neutrons: 153,
        eletrons: 98,
        config: "[Rn] 5f¹⁰ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Glenn Seaborg e equipe em 1950 na Califórnia.",
        reacoes: "Usado como fonte de nêutrons para iniciar reações nucleares."
    },
    {
        numero: 99,
        simbolo: "Es",
        nome: "Einstênio",
        massa: "252",
        grupo: 3,
        periodo: 7,
        protons: 99,
        neutrons: 153,
        eletrons: 99,
        config: "[Rn] 5f¹¹ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Albert Ghiorso e equipe em 1952. Nomeado em homenagem a Einstein.",
        reacoes: "Produzido em explosões de bombas de hidrogênio."
    },
    {
        numero: 100,
        simbolo: "Fm",
        nome: "Férmio",
        massa: "257",
        grupo: 3,
        periodo: 7,
        protons: 100,
        neutrons: 157,
        eletrons: 100,
        config: "[Rn] 5f¹² 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Albert Ghiorso e equipe em 1952. Nomeado em homenagem a Fermi.",
        reacoes: "Produzido em testes termonucleares."
    },
    {
        numero: 101,
        simbolo: "Md",
        nome: "Mendelévio",
        massa: "258",
        grupo: 3,
        periodo: 7,
        protons: 101,
        neutrons: 157,
        eletrons: 101,
        config: "[Rn] 5f¹³ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por Albert Ghiorso e equipe em 1955. Nomeado em homenagem a Mendeleev.",
        reacoes: "Produzido átomo por átomo."
    },
    {
        numero: 102,
        simbolo: "No",
        nome: "Nobélio",
        massa: "259",
        grupo: 3,
        periodo: 7,
        protons: 102,
        neutrons: 157,
        eletrons: 102,
        config: "[Rn] 5f¹⁴ 7s²",
        categoria: "actinídeo",
        historia: "Descoberto por equipes na Suécia e Rússia nos anos 1950.",
        reacoes: "Nomeado em homenagem a Alfred Nobel."
    },
    {
        numero: 103,
        simbolo: "Lr",
        nome: "Laurêncio",
        massa: "266",
        grupo: 3,
        periodo: 7,
        protons: 103,
        neutrons: 163,
        eletrons: 103,
        config: "[Rn] 5f¹⁴ 7s² 7p¹",
        categoria: "actinídeo",
        historia: "Descoberto por Albert Ghiorso e equipe em 1961. Nomeado em homenagem a Lawrence.",
        reacoes: "Último dos actinídeos."
    },

    // Continuação Período 7 (104-118)
    {
        numero: 104,
        simbolo: "Rf",
        nome: "Rutherfórdio",
        massa: "267",
        grupo: 4,
        periodo: 7,
        protons: 104,
        neutrons: 163,
        eletrons: 104,
        config: "[Rn] 5f¹⁴ 6d² 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Albert Ghiorso e equipe em 1969. Nomeado em homenagem a Rutherford.",
        reacoes: "Elemento sintético radioativo."
    },
    {
        numero: 105,
        simbolo: "Db",
        nome: "Dúbnio",
        massa: "268",
        grupo: 5,
        periodo: 7,
        protons: 105,
        neutrons: 163,
        eletrons: 105,
        config: "[Rn] 5f¹⁴ 6d³ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Albert Ghiorso e equipe em 1970. Nomeado em homenagem a Dubna.",
        reacoes: "Sintético. Meia-vida muito curta."
    },
    {
        numero: 106,
        simbolo: "Sg",
        nome: "Seabórgio",
        massa: "269",
        grupo: 6,
        periodo: 7,
        protons: 106,
        neutrons: 163,
        eletrons: 106,
        config: "[Rn] 5f¹⁴ 6d⁴ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Albert Ghiorso e equipe em 1974. Nomeado em homenagem a Seaborg.",
        reacoes: "Sintético. Nomeado enquanto Seaborg ainda estava vivo."
    },
    {
        numero: 107,
        simbolo: "Bh",
        nome: "Bóhrio",
        massa: "270",
        grupo: 7,
        periodo: 7,
        protons: 107,
        neutrons: 163,
        eletrons: 107,
        config: "[Rn] 5f¹⁴ 6d⁵ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Peter Armbruster e equipe em 1981. Nomeado em homenagem a Bohr.",
        reacoes: "Sintético. Meia-vida de segundos."
    },
    {
        numero: 108,
        simbolo: "Hs",
        nome: "Hássio",
        massa: "269",
        grupo: 8,
        periodo: 7,
        protons: 108,
        neutrons: 161,
        eletrons: 108,
        config: "[Rn] 5f¹⁴ 6d⁶ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Peter Armbruster e equipe em 1984. Nomeado em homenagem a Hessen.",
        reacoes: "Sintético. Nomeado pela região de Hessen na Alemanha."
    },
    {
        numero: 109,
        simbolo: "Mt",
        nome: "Meitnério",
        massa: "278",
        grupo: 9,
        periodo: 7,
        protons: 109,
        neutrons: 169,
        eletrons: 109,
        config: "[Rn] 5f¹⁴ 6d⁷ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Peter Armbruster e equipe em 1982. Nomeado em homenagem a Lise Meitner.",
        reacoes: "Sintético. Homenagem a uma das maiores físicas."
    },
    {
        numero: 110,
        simbolo: "Ds",
        nome: "Darmstádio",
        massa: "281",
        grupo: 10,
        periodo: 7,
        protons: 110,
        neutrons: 171,
        eletrons: 110,
        config: "[Rn] 5f¹⁴ 6d⁸ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Sigurd Hofmann e equipe em 1994. Nomeado em homenagem a Darmstadt.",
        reacoes: "Sintético. Produzido no GSI Helmholtz."
    },
    {
        numero: 111,
        simbolo: "Rg",
        nome: "Roentgênio",
        massa: "282",
        grupo: 11,
        periodo: 7,
        protons: 111,
        neutrons: 171,
        eletrons: 111,
        config: "[Rn] 5f¹⁴ 6d⁹ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Sigurd Hofmann e equipe em 1994. Nomeado em homenagem a Röntgen.",
        reacoes: "Sintético. Homenagem ao descobridor dos raios-X."
    },
    {
        numero: 112,
        simbolo: "Cn",
        nome: "Copernício",
        massa: "285",
        grupo: 12,
        periodo: 7,
        protons: 112,
        neutrons: 173,
        eletrons: 112,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        categoria: "metal-transição",
        historia: "Descoberto por Sigurd Hofmann e equipe em 1996. Nomeado em homenagem a Copérnico.",
        reacoes: "Sintético. Nomeado em 2010."
    },
    {
        numero: 113,
        simbolo: "Nh",
        nome: "Nipônio",
        massa: "286",
        grupo: 13,
        periodo: 7,
        protons: 113,
        neutrons: 173,
        eletrons: 113,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        categoria: "metal",
        historia: "Descoberto por equipe japonesa no RIKEN em 2004. Primeiro elemento descoberto na Ásia.",
        reacoes: "Sintético. Nomeado em homenagem ao Japão (Nihon)."
    },
    {
        numero: 114,
        simbolo: "Fl",
        nome: "Fleróvio",
        massa: "289",
        grupo: 14,
        periodo: 7,
        protons: 114,
        neutrons: 175,
        eletrons: 114,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        categoria: "metal",
        historia: "Descoberto por Yuri Oganessian e equipe em 1999. Nomeado em homenagem a Flerov.",
        reacoes: "Sintético. Homenagem ao Laboratório Flerov de Reações Nucleares."
    },
    {
        numero: 115,
        simbolo: "Mc",
        nome: "Moscóvio",
        massa: "290",
        grupo: 15,
        periodo: 7,
        protons: 115,
        neutrons: 175,
        eletrons: 115,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        categoria: "metal",
        historia: "Descoberto por Yuri Oganessian e equipe em 2003. Nomeado em homenagem a Moscou.",
        reacoes: "Sintético. Meia-vida de frações de segundo."
    },
    {
        numero: 116,
        simbolo: "Lv",
        nome: "Livermório",
        massa: "293",
        grupo: 16,
        periodo: 7,
        protons: 116,
        neutrons: 177,
        eletrons: 116,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        categoria: "metal",
        historia: "Descoberto por Yuri Oganessian e equipe em 2000. Nomeado em homenagem a Livermore.",
        reacoes: "Sintético. Homenagem ao Laboratório Nacional Lawrence Livermore."
    },
    {
        numero: 117,
        simbolo: "Ts",
        nome: "Tenessino",
        massa: "294",
        grupo: 17,
        periodo: 7,
        protons: 117,
        neutrons: 177,
        eletrons: 117,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        categoria: "halogênio",
        historia: "Descoberto por Yuri Oganessian e equipe em 2010. Nomeado em homenagem ao Tennessee.",
        reacoes: "Sintético. Homenagem ao estado do Tennessee (Oak Ridge)."
    },
    {
        numero: 118,
        simbolo: "Og",
        nome: "Oganessônio",
        massa: "294",
        grupo: 18,
        periodo: 7,
        protons: 118,
        neutrons: 176,
        eletrons: 118,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        categoria: "gás-nobre",
        historia: "Descoberto por Yuri Oganessian e equipe em 2002. Nomeado em homenagem a Yuri Oganessian.",
        reacoes: "Sintético. Único elemento nomeado em homenagem a uma pessoa viva (na época)."
    }
];

// Elementos da interface
const tabela = document.getElementById("tabela");
const toggleViewBtn = document.getElementById("toggleView");
const infoDiv = document.getElementById("info");
const fecharBtn = document.getElementById("fechar");

let compactMode = false;

// Limpar tabela
tabela.innerHTML = "";

// Função para criar elementos da tabela
function criarElementos() {
    tabela.innerHTML = "";
    
    elementos.forEach(el => {
        const div = document.createElement("div");
        div.classList.add("elemento");
        
        // Adicionar atributo de categoria para cores
        if (el.categoria) {
            div.setAttribute("data-categoria", el.categoria);
        }
        
        // Posicionamento na grade
        div.style.gridColumn = el.grupo;
        div.style.gridRow = el.periodo;
        
        // Conteúdo do elemento
        div.innerHTML = `
            <div class="numero">${el.numero}</div>
            <div class="simbolo">${el.simbolo}</div>
            <div class="nome">${deviceInfo.isMobile ? '' : el.nome}</div>
            <div class="massa">${deviceInfo.isMobile ? '' : el.massa}</div>
        `;
        
        // Evento de clique com suporte a touch
        div.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarInfo(el);
        });
        
        // Suporte a touch para mobile
        if (deviceInfo.isMobile) {
            div.addEventListener('touchstart', (e) => {
                e.preventDefault();
                div.style.background = 'white';
                div.style.color = 'black';
            });
            
            div.addEventListener('touchend', (e) => {
                e.preventDefault();
                div.style.background = '';
                div.style.color = '';
            });
        }
        
        tabela.appendChild(div);
    });
}

// Inicializar tabela
criarElementos();

// Alternar visualização compacta para mobile
if (toggleViewBtn) {
    toggleViewBtn.addEventListener('click', () => {
        compactMode = !compactMode;
        if (compactMode) {
            tabela.classList.add('compact-view');
            toggleViewBtn.textContent = 'Visualização Normal';
        } else {
            tabela.classList.remove('compact-view');
            toggleViewBtn.textContent = 'Visualização Compacta';
        }
    });
}

// Função para mostrar informações do elemento
function mostrarInfo(el) {
    // Preencher dados
    document.getElementById("nome-elemento").textContent = el.nome;
    document.getElementById("simbolo").textContent = el.simbolo;
    document.getElementById("numero").textContent = el.numero;
    document.getElementById("protons").textContent = el.protons;
    document.getElementById("neutrons").textContent = el.neutrons || "—";
    document.getElementById("eletrons").textContent = el.eletrons;
    document.getElementById("config").textContent = el.config;
    document.getElementById("historia").textContent = el.historia;
    document.getElementById("reacoes").textContent = el.reacoes;
    
    // Mostrar info
    infoDiv.classList.remove("hidden");
    
    // Prevenir scroll do body quando info está aberta
    document.body.style.overflow = 'hidden';
    
    // Se for mobile, adicionar classe especial
    if (deviceInfo.isMobile) {
        infoDiv.classList.add('mobile-info');
    }
}

// Fechar info
function fecharInfo() {
    infoDiv.classList.add("hidden");
    document.body.style.overflow = '';
}

fecharBtn.addEventListener('click', fecharInfo);

// Fechar ao clicar fora
infoDiv.addEventListener('click', (e) => {
    if (e.target === infoDiv) {
        fecharInfo();
    }
});

// Suporte a gestos de swipe para fechar em mobile
if (deviceInfo.isMobile) {
    let touchStartY = 0;
    
    infoDiv.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    infoDiv.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        
        if (diff > 50) { // Swipe para baixo
            fecharInfo();
        }
    }, { passive: true });
}

// Ajustar layout quando orientação mudar (mobile)
window.addEventListener('resize', () => {
    const wasMobile = deviceInfo.isMobile;
    const newIsMobile = window.innerWidth <= 768;
    
    // Se mudou de desktop para mobile ou vice-versa
    if (wasMobile !== newIsMobile) {
        location.reload(); // Recarrega para ajustar layout
    }
});

// Prevenir zoom acidental em inputs no mobile
if (deviceInfo.isMobile) {
    document.addEventListener('touchmove', (e) => {
        if (e.target.closest('.info-box')) {
            e.stopPropagation();
        }
    }, { passive: false });
}

// Suporte a tecla ESC para fechar
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !infoDiv.classList.contains('hidden')) {
        fecharInfo();
    }
});

// Mostrar mensagem de boas-vindas com detecção
console.log(`👋 Bem-vindo! Acessando de ${deviceInfo.device} (${deviceInfo.os})`);

// Opcional: mostrar toast de boas-vindas
if (deviceInfo.isMobile) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: black;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 14px;
        z-index: 100;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        animation: slideUp 3s forwards;
    `;
    toast.textContent = `📱 Modo ${deviceInfo.device} ativado`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Adicionar estilo para animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        0% { bottom: -50px; opacity: 0; }
        10% { bottom: 20px; opacity: 1; }
        90% { bottom: 20px; opacity: 1; }
        100% { bottom: -50px; opacity: 0; }
    }
`;
document.head.appendChild(style);