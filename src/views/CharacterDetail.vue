<script setup>


</script>

<template>
  <div>
        <div class="film-container">
            <div class="film">
                <div class="film-preview" >
                    <img src='https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png' alt='char' />
                </div>
                <div class="film-info">
                    <h2>Char name</h2>
                    <span>Liste Films</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.film-container {
    font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
    color:black;
	flex-direction: column;
}

.film {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
}

.film h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.film h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.film-preview {
    background-color: #009879;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}
.film-preview img{
    max-height:250px;
}
.film-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.film-info {
	padding: 30px;
	position: relative;
	width: 100%;
}
</style>