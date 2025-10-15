# A Brief History of MATLAB

By Cleve Moler, MathWorks

The first MATLAB® was not a programming language; it was a simple interactive
matrix calculator. There were no programs, no toolboxes, no graphics. And no
ODEs or FFTs.

In this Cleve’s Corner, I’ll describe some milestones in the evolution of
MATLAB from those simple beginnings.

## Mathematical Origins

The mathematical basis for the first version of MATLAB was a series of research
papers by J. H. Wilkinson and 18 of his colleagues, published between 1965 and
1970 and later collected in _Handbook for Automatic Computation, Volume II,
Linear Algebra_, edited by Wilkinson and C. Reinsch. These papers present
algorithms, implemented in Algol 60, for solving matrix linear equation and
eigenvalue problems.

## EISPACK and LINPACK

In 1970, a group of researchers at Argonne National Laboratory proposed to the
U.S. National Science Foundation (NSF) to “explore the methodology, costs, and
resources required to produce, test, and disseminate high-quality mathematical
software and to test, certify, disseminate, and support packages of
mathematical software in certain problem areas.” The group developed EISPACK
(Matrix Eigensystem Package) by translating the Algol procedures for eigenvalue
problems in the handbook into Fortran and working extensively on testing and
portability. The first version of EISPACK was released in 1971 and the second
in 1976.

In 1975, four of us - Jack Dongarra, Pete Stewart, Jim Bunch, and myself -
proposed to the NSF another research project that would investigate methods for
the development of mathematical software. A byproduct would be the software
itself, dubbed LINPACK, for Linear Equation Package. This project was also
centered at Argonne.

LINPACK originated in Fortran; it did not involve translation from Algol. The
package contained 44 subroutines in each of four numeric precisions.

In a sense, the LINPACK and EISPACK projects were failures. We had proposed
research projects to the NSF to “explore the methodology, costs, and resources
required to produce, test, and disseminate high-quality mathematical software.”
We never wrote a report or paper addressing those objectives. We only produced
software.

## Historic MATLAB

In the 1970s and early 1980s, I was teaching Linear Algebra and Numerical
Analysis at the University of New Mexico and wanted my students to have easy
access to LINPACK and EISPACK without writing Fortran programs. By “easy
access,” I meant not going through the remote batch processing and the repeated
edit-compile-link-load-execute process that was ordinarily required on the
campus central mainframe computer.

So, I studied Niklaus Wirth’s book _Algorithms + Data Structures = Programs_
and learned how to parse programming languages. I wrote the first MATLAB - an
acronym for Matrix Laboratory - in Fortran, with matrix as the only data type.
The project was a kind of hobby, a new aspect of programming for me to learn
and something for my students to use. There was never any formal outside
support, and certainly no business plan.

This first MATLAB was just an interactive matrix calculator. This snapshot of
the start-up screen shows all the reserved words and functions. There are
only 71. To add another function, you had to get the source code from me, write
a Fortran subroutine, add your function name to the parse table, and recompile
MATLAB.

![First MATLAB startup screen](https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab/_jcr_content/mainParsys/image_0_copy.adapt.full.medium.jpg/1745230987364.jpg)

## Commercial MATLAB

I spent the 1979 - 80 academic year at Stanford, where I taught the graduate
course in Numerical Analysis and introduced the class to this matrix
calculator. Some of the students were studying subjects like control theory and
signal processing, which I knew nothing about. Matrices were central to the
mathematics in these subjects, though, and MATLAB was immediately useful to the
students.

![Commercial MATLAB](https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab/_jcr_content/mainParsys/image_0_copy_copy.adapt.full.medium.jpg/1745230987378.jpg)

Jack Little had been in the graduate engineering program at Stanford. A friend
of his who took my course showed him MATLAB, and he adopted it for his own
work.

In 1983, Little suggested the creation of a commercial product based on MATLAB.
The IBM® PC had been introduced only two years earlier. It was barely powerful
enough to run a program like MATLAB, but Little anticipated its evolution. He
left his job, bought a Compaq® PC clone at Sears, moved into the hills behind
Stanford, and with my encouragement, wrote a new and extended version of MATLAB
in C. A friend, Steve Bangert, worked on the new MATLAB in his spare time.

PC-MATLAB made its debut in December 1984 at the IEEE Conference on Decision
and Control in Las Vegas. Pro-MATLAB, for Unix workstations, followed a year
later.

Little and Bangert made many important modifications and improvements to
Historic MATLAB when they created the new and extended version. The most
significant were functions, toolboxes, and graphics.

## Modern MATLAB

While preserving its roots in matrix mathematics, MATLAB has continued to
evolve to meet the changing needs of engineers and scientists. The key
developments are shown in the timeline. Here, I’ll elaborate on some of them.

### ODEs

The numerical solution of ordinary differential equations has been a vital part
of MATLAB since its commercial beginning. ODEs are also the core of Simulink®,
the MATLAB companion product for simulation and Model-Based Design.

The Van der Pol oscillator is a classical ODE example.

The parameter μ is the strength of the nonlinear damping term. When μ = 0, we
have the basic harmonic oscillator.

The MATLAB code expresses the oscillator as a pair of first-order equations.

```matlab
mu = 5;
vdp = @(t,y) [y(2); mu*(1-y(1)^2)*y(2)-y(1)];
tspan = [0 30];
y0 = [0 0.01]';
[t,y] = ode23s(vdp,tspan,y0);
plot(t,y,'.-')
legend({'y','dy/dt'})
xlabel('t')
```

![Van der Pol Oscillator](https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab/_jcr_content/mainParsys/image_0_copy_copy_co.adapt.full.medium.jpg/1745230987387.jpg)

The Van der Pol oscillator, with the parameter μ set to 5, is a mildly _stiff_
differential equation. In anticipation, I used the `ode23s` solver; the ‘s’ in
the name indicates that it is for stiff equations. In the plot you can see some
clustering of steps where the solution is varying rapidly. A nonstiff solver
would have taken many more steps. A stiff ode solver uses an implicit method
requiring the solution of a set of simultaneous linear equations at each step.
The iconic MATLAB backslash operator is quietly at work here.

## Data Types

For many years, MATLAB had only one numeric data type: IEEE standard 754
double-precision floating point, stored in the 64-bit format. As people began
to use MATLAB for more applications and larger data sets, we provided more ways
to represent data.

### Single Precision and Integer

Support for single-precision arithmetic began in the early 2000s and was
complete by MATLAB 7 in 2004. Requiring only 32 bits of storage, single
precision cuts memory requirements for large arrays in half. MATLAB does not
have declarations, so single-precision variables are obtained by executable
conversion functions.

MATLAB 7 also introduced three unsigned integer data types, `uint8`, `uint16`,
and `uint32`; three signed integer data types, `int8`, `int16`, and `int32`;
and one logical data type, `logical`.

### Sparse Matrices

Sparse matrices were introduced with MATLAB 4 in 1992. They are a
memory-efficient way to represent very large arrays that have few nonzero
values. Only the nonzero elements are stored, along with row indices and
pointers to the starts of columns. The only change to the outward appearance of
MATLAB is a pair of functions, `sparse` and `full`. Nearly all the operations
apply equally to full and sparse matrices. The sparse storage scheme represents
a matrix in space proportional to the number of nonzero entries, and most of
the operations compute sparse results in time proportional to the number of
arithmetic operations on nonzeros.

### Cell Arrays

Cell arrays were introduced with MATLAB 5 in 1996. A cell array is an indexed,
possibly heterogeneous collection of MATLAB objects, including other cell
arrays. Cell arrays are created by curly braces, `{}`.

Cell arrays can be indexed by both curly braces and smooth parentheses. With
braces, `c{k}` is the contents of the k-th cell. With parentheses, `c(k)` is
another cell array containing the specified cells. Think of a collection of
mailboxes. `box(k)` is the k-th mailbox. box{k} is the mail in the k-th box.

### Structures

Structures and associated “dot notation” were introduced in 1996. This script
for creating a grade book for a small class shows structures and dot notation
at work.

```matlab
   Math101.name = ["Alice Jones"; "Bob Smith"; "Charlie Brown"];
   Math101.grade = ["A"; "B+"; "C"];
   Math101.year = [4; 2; 3];
```

To call the roll, we need the list of names.

```matlab
   disp(Math101.name)
       "Alice Jones"
       "Bob Smith"
       "Charlie Brown"
```

Changing Charlie’s grade involves both structure and array notation.

```matlab
   Math101.grade(3) = “W”;
   disp(Math101.grade)

       “A”
       “B+”
       “W”
```

### Objects

Major enhancements to MATLAB object-oriented programming capabilities were made
in 2008. Creating classes can simplify programming tasks that involve
specialized data structures or large numbers of functions that interact with
particular kinds of data. MATLAB classes support function and operator
overloading, controlled access to properties and methods, reference and value
semantics, and events and listeners.

The MATLAB graphics system is one large, complex example of the object-oriented
approach to MATLAB programming.

## Making MATLAB More Accessible: Desktop and Live Editor

The first versions of MATLAB were simple terminal applications. Over time we
added separate windows for graphics, editing, and other tools. These gradually
made MATLAB easier to use, especially for users without prior programming
experience. Two specific features that have had the biggest impact are the
desktop and the Live Editor.

### Desktop

The MATLAB desktop was introduced in 2000. Here is a screenshot showing how it
looks today.

![MATLAB Desktop](https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab/_jcr_content/mainParsys/image_0_copy_copy_co_451922581.adapt.full.medium.jpg/1745230987400.jpg)

Four panels are visible: the current folder viewer (left), the workspace viewer
(right), the editor/debugger (top center), and the traditional command window
(bottom center). A file viewer and a command history window can also be
included in personalized layouts.

Any panel can be closed or undocked into a standalone window.

### Live Editor

The Live Editor was introduced in 2016 and is still evolving rapidly.

Descriptive text and MATLAB input, output, and graphics are combined in a
single interactive document that can be exported to HTML, PDF, or LaTeX.

![Live Editor](https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab/_jcr_content/mainParsys/image_0_copy_copy_co_1686324416.adapt.full.medium.jpg/1745230987410.jpg)

## Parallel Computing

Parallel Computing Toolbox™ was introduced at the SuperComputing conference
in 2004. The following year, at SC05, Bill Gates gave the keynote talk, using
MATLAB to demonstrate Microsoft’s entry into high-performance computing.

The toolbox supports coarse-grained, distributed memory parallelism by running
many MATLAB workers on several machines in a cluster or on many cores in a
single machine. MPI is used for the underlying message passing. By far the most
popular feature of the toolbox is the parallel `for` loop command, `parfor`.

The toolbox also supports fine-grained, shared memory parallelism in attached
graphics processing units (GPUs). Here, the `gpuArray` array gets things
started.

## Toolboxes

Much of the power of modern MATLAB derives from the toolboxes available for
specialized applications. As of release 2018a, there are 63 of them:

- Application Deployment (3)
- Code Generation (7)
- Computational Biology (2)
- Computational Finance (8)
- Control Systems (8)
- Database Access and Reporting (2)
- Image Processing and Computer Vision (6)
- Math, Statistics, and Optimization (9)
- Parallel Computing (2)
- Signal Processing and Wireless Communications (11)
- Test and Measurement (5)

## What’s Next?

MATLAB has come a long way since the simple calculator that started it all. It
is a living ecosystem supporting all aspects of technical computing. We will
continue to strengthen existing features as we carefully add new ones. Our
goals are always ease of use, power, and speed.

Published 2018

MOLER, Cleve. A Brief History of MATLAB. MathWorks® Technical Articles, 2018.
Available at:
https://www.mathworks.com/company/technical-articles/a-brief-history-of-matlab.html.

# MATLAB Timeline

## 1984

- PC-MATLAB
- FFT
- Graphics

## 1985

- Pro-MATLAB
- Control System Toolbox™

## 1987

- Signal Processing Toolbox™
- ODEs

## 1992

- Sparse matrices
- Simulink®

## 1993

- Image Processing Toolbox™
- Symbolic Math Toolbox™

## 1996

- Single precision
- Cell arrays
- Structures

## 1999

- Objects

## 2000

- Desktop
- LAPACK

## 2004

- Integer data types
- Function handles
- Parallel computing

## 2008

- Objects improved

## 2010

- GPUs

## 2014

- New graphics system

## 2016

- Live Editor

## 2017

- Tall arrays and categorical arrays
