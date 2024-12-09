module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban specific phrases as the text content of <a> elements.',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [], // no options
    messages: {
      bannedAnchorText:
        "Avoid using banned anchor text: '{{text}}'. Use descriptive text instead.",
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        if (node.children.length === 1 && node.children[0].type === 'JSXText') {
          const textContent = node.children[0].value.trim().toLowerCase();
          if (bannedPhrases.includes(textContent)) {
            context.report({
              node,
              messageId: 'bannedAnchorText',
              data: { text: node.children[0].value.trim() },
            });
          }
        }
      },
    };
  },
};

// See: https://github.com/GoogleChrome/lighthouse/blob/b64b3534542c9dcaabb33d40b84ed7c93eefbd7d/core/audits/seo/link-text.js#L11-L99
const bannedPhrases = [
  // English
  'click here',
  'click this',
  'go',
  'here',
  'information',
  'learn more',
  'more',
  'more info',
  'more information',
  'right here',
  'read more',
  'see more',
  'start',
  'this',

  // Japanese
  'ここをクリック',
  'こちらをクリック',
  'リンク',
  '続きを読む',
  '続く',
  '全文表示',

  // Spanish
  'click aquí',
  'click aqui',
  'clicka aquí',
  'clicka aqui',
  'pincha aquí',
  'pincha aqui',
  'aquí',
  'aqui',
  'más',
  'mas',
  'más información',
  'más informacion',
  'mas información',
  'mas informacion',
  'este',
  'enlace',
  'este enlace',
  'empezar',

  // Portuguese
  'clique aqui',
  'ir',
  'mais informação',
  'mais informações',
  'mais',
  'veja mais',

  // Korean
  '여기',
  '여기를 클릭',
  '클릭',
  '링크',
  '자세히',
  '자세히 보기',
  '계속',
  '이동',
  '전체 보기',

  // Swedish
  'här',
  'klicka här',
  'läs mer',
  'mer',
  'mer info',
  'mer information',

  // Tamil
  'அடுத்த பக்கம்',
  'மறுபக்கம்',
  'முந்தைய பக்கம்',
  'முன்பக்கம்',
  'மேலும் அறிக',
  'மேலும் தகவலுக்கு',
  'மேலும் தரவுகளுக்கு',
  'தயவுசெய்து இங்கே அழுத்தவும்',
  'இங்கே கிளிக் செய்யவும்',

  // Persian
  'اطلاعات بیشتر',
  'اطلاعات',
  'این',
  'اینجا بزنید',
  'اینجا کلیک کنید',
  'اینجا',
  'برو',
  'بیشتر بخوانید',
  'بیشتر بدانید',
  'بیشتر',
  'شروع',
];
