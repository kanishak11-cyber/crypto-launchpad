export default function Handler(){
    return (req, res) => {
        res.status(200).json({ name: 'John Doe' })
    }
    
}