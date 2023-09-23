
const testAPI = (req, res) => {
    console.log('Test API Working');
    res.status(200).json({
        success: "true",
        message: "Test API Working",
    })
}
