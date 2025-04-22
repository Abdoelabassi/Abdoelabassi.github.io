main := main.tex

all: $(main)
	latexmk -pdf -pdflatex="pdflatex -interaction=nonstopmode" -use-make $(main)

clean:
	latexmk -c $(main)
	rm -f $(main:.tex=.bbl) $(main:.tex=.run.xml) $(main:.tex=.synctex.gz)
