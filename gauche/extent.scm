(define (make-2d-point x y)
  (lambda (operation)
     (cond ((equal? operation "x") x)
           ((equal? operation "y") y)
           (else #f))))
