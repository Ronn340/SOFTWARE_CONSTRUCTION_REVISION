
/**
 * Renders the index page with the specified title.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
 */
export async function index(req, res, next) {
    res.render('home', { title: 'Express' });
}

export async function form(req, res, next) {
    res.render('form')
}

export async function text(req, res, next) {
    res.render('text', {content: "select a file to read its content", selected: ""});
}

export async function submit(req, res, next) {
    const firstname_value = req.body.firstname_value
    const lastname_value = req.body.lastname_value
    const age_value = req.body.age_value
    res.render('show', {firstname: firstname_value, lastname: lastname_value, age: age_value});  
}

import fsp from 'fs/promises'
import path from 'path'
export async function read(req, res, next) {
    const selected = req.body.selected
    var text_content
    try {
        const filepath = path.join(import.meta.dirname, '..', 'public', 'texts', selected)
        text_content = await fsp.readFile(filepath,{encoding: 'utf8'})
    } catch (err) {
        console.error(err)
    }
    res.render('text', {content: text_content, selected: selected});
}

export async function save(req, res, next) {
    const file = req.body.selected
    const content = req.body.content
    var output

    try {
        const filepath = path.join(import.meta.dirname, '..', 'public', 'texts', file); 
        await fsp.writeFile(filepath, content, { encoding: 'utf8' })
        output = "File saved successfully."
    } catch (err) {
        console.error(err)
        output = "Error saving file."
        return;
    }
    res.render('text', {content: "", selected: "", message: output});
}

