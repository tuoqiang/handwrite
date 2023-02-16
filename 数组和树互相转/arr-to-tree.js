var list = [
    {
        id: 1,
        name: '部门A',
        parentId: 0,
    },
    {
        id: 2,
        name: '部门B',
        parentId: 1,
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1,
    },
    {
        id: 4,
        name: '部门D',
        parentId: 1,
    },
    {
        id: 5,
        name: '部门E',
        parentId: 2,
    },
    {
        id: 6,
        name: '部门F',
        parentId: 3,
    },
    {
        id: 7,
        name: '部门G',
        parentId: 2,
    },
    {
        id: 8,
        name: '部门H',
        parentId: 4,
    },
]

function toTree2(list) {
    const map = {}
    let res = []

    list.forEach((item) => {
        if (!item.children) {
            item.children = []
        }
        map[item.id] = item //
    })

    list.forEach((item) => {
        if (map[item.parentId]) {
            map[item.parentId].children.push(item)
        } else {
            res.push(item)
        }
    })

    return res
}

function toTree(list, parentId = null) {
    const newlist = list.filter((item) => {
        return item.parentId == parentId
    })
    newlist.forEach((item) => {
        item.children = toTree(list, item.id)
    })
    return newlist
}
