

export async function getResponse(url, req_headers) {
    
    const options = {
        method: 'GET',
        headers: req_headers
    };

    try {
        const response = await fetch(url, options);
        const result_txt = await response.text();
        const result_obj = await JSON.parse(result_txt);
        return result_obj
    } catch (error) {
        console.log(error)
    }
}