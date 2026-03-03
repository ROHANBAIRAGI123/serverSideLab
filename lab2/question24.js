let jsonString = '{"name":"Alice", "age":25, }';

try {
    console.log("Parsing JSON...");

    
    let data = JSON.parse(jsonString);

    console.log("Parsed data:", data);

} catch (error) {

    if (error instanceof SyntaxError) {
        console.log("SyntaxError: Invalid JSON string");
        console.log("Error message:", error.message);
    } else {
        console.log("Unexpected error:", error.message);
    }

} finally {
    console.log("JSON parsing completed.");
}