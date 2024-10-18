import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dsptdlfitehtalgprjeu.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcHRkbGZpdGVodGFsZ3ByamV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTI1MzMsImV4cCI6MjA0Mjc4ODUzM30.8lKdh4rOYbYjOzoZrxPT95VkXbwTNgdzc8I9aKpDP2E",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcHRkbGZpdGVodGFsZ3ByamV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTI1MzMsImV4cCI6MjA0Mjc4ODUzM30.8lKdh4rOYbYjOzoZrxPT95VkXbwTNgdzc8I9aKpDP2E"
    }
})