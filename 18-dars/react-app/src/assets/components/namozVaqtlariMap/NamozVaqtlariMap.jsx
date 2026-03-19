
function NamozVaqtlariMap({ item, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.meta.date}</td>
            <td>{item.meta.now }</td>
            <td>{item.meta.region.name}</td>
            <td>{item.meta.region.parent}</td>
            <td>{item.today.current.label }</td>
            <td>{item.today.next.label}</td>
        </tr>
    )
}

export default NamozVaqtlariMap