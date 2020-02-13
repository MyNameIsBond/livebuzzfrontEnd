import styles from './css/styles.css';

let count = window.oc.cart.count;

window.oc.events.on('cartChange', () => {
  count = window.oc.cart.count;
  document.getElementById('count').innerText = count;
});

export default ({ name, staticPath }) =>
   `<div class=${styles.container}>
    <div>
    <img src="https://www.livebuzz.co.uk/images/livebuzz.png" height="30" alt="">
    </div>
    <div>
      <span id="count">0</span> shows in cart
    </div>
  </div>`;

  const _items = [
    {
      key: 'newItem',
      text: 'New',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add' },
      subMenuProps: {
        items: [
          {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
            ['data-automation-id']: 'newEmailButton' // optional
          },
          {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' }
          }
        ]
      }
    },
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      href: 'https://dev.office.com/fabric'
    },
    {
      key: 'share',
      text: 'Share',
      iconProps: { iconName: 'Share' },
      onClick: () => console.log('Share')
    },
    {
      key: 'download',
      text: 'Download',
      iconProps: { iconName: 'Download' },
      onClick: () => console.log('Download')
    }
  ];
  
  const _overflowItems = [
    
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } }
    
    ];
  
  const _farItems = [
    {
      key: 'tile',
      text: 'Grid view',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Grid view',
      iconOnly: true,
      iconProps: { iconName: 'Tiles' },
      onClick: () => console.log('Tiles')
    },
    {
      key: 'info',
      text: 'Info',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Info',
      iconOnly: true,
      iconProps: { iconName: 'Info' },
      onClick: () => console.log('Info')
    }
  ];
  