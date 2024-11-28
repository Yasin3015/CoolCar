import axios from 'axios';

export async function fetchData(url) {
    try {
        const response = await axios.get(url);

        if (response.status !== 200) { // تحقق من الكود
            throw new Error(response.message || 'Unexpected error'); // إرجاع الرسالة
        }
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}
