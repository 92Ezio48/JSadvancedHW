export const commentFormsEl = document.querySelectorAll('.comment');
export const answerFormClick = () => {
    for (const commentFormEl of commentFormsEl) {
        commentFormEl.addEventListener('click', () => {
        const index = event.currentTarget.getAttribute('data-index');
        const comment = comments[index];
        document.querySelector('.add-form-text').value = comment.name + ` : ${comment.text}  ` ;
        
                                                  }) 
                                                }
                                            }