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
    attrs: {
        id: 'div1',
        style: {
            border: '1px solid #ccc',
            padding: '10px',
        },
    },
    children: [
        100,
        'string',
        {
            tag: 'p', // <p>
            attrs: {},
            children: [
                '一行文字',
                {
                    tag: 'a', // <a>
                    attrs: {
                        href: 'xxx.html',
                        target: '_blank',
                    },
                    children: ['链接'],
                },
            ],
        },
        {
            tag: 'img', // <img>
            attrs: {
                className: 'image', // 注意，这里要用 className
                src: 'xxx.png',
                alt: '图片',
            },
        },
        {
            tag: 'button', // <button>
            attrs: {
                events: {
                    click: clickHandler,
                },
            },
            children: ['点击'],
        },
    ],
}
function render(vnode, container) {
    container.appendChild(render(vnode))
}

function _render(vnode) {
    if (typeof vnode === 'number') {
        vnode = String(vnode)
    }
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode)
    }
    let dom
    if (typeof vnode === 'object' && vnode !== null) {
        dom = document.createElement(vnode.tag)
        if (vnode.attrs) {
            Object.keys(vnode.attrs).forEach((key) => {
                const value = vnode.attrs[key]
                dom.setAttrbute(key, value)
            })
        }
        if (vnode.children) {
            vnode.children.forEach((child) => {
                render(child, dom)
            })
        }
    }
    return dom
}
