/* 
    <div id="div1" style="border: 1px solid #ccc; padding: 10px;">
        <p>
            一行文字
            <a href="xxx.html" target="_blank">
                链接
            </a>
        </p>
        <img src="xxx.png" alt="图片" class="image" />
        <button click="clickHandler">点击</button>
    </div> 
*/


const vnode = {
    tag: 'div', // <div>
    data: {
        id: 'div1',
        style: {
            'border': '1px solid #ccc',
            'padding': '10px'
        }
    },
    children: [
        {
            tag: 'p', // <p>
            data: {},
            children: [
                '一行文字',
                {
                    tag: 'a', // <a>
                    data: {
                        href: 'xxx.html',
                        target: '_blank'
                    },
                    children: ['链接']
                }
            ]
        },
        {
            tag: 'img', // <img>
            data: {
                className: 'image', // 注意，这里要用 className
                src: 'xxx.png',
                alt: '图片'
            }
        },
        {
            tag: 'button', // <button>
            data: {
                events: {
                    click: clickHandler
                }
            }
            children: ['点击']
        }
    ]
}