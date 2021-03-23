import Fragment from '../../hoc/Fragment'
import withClass from '../../hoc/withClass'

function Layout( { header, menu, content, footer} ) {
    return (
        <>
            <div>{header}</div>
            <div className="container">{menu}</div>
            <div className="container">{content}</div>
            <div>{footer}</div>
        </>
    )
}

export default withClass(Layout, 'layout')