from django.db import models

class Pet(models.Model):
	name = models.CharField(max_length=50)
	breed = models.CharField(max_length=50)
	gender = models.CharField(max_length=6)
	neutered = models.BooleanField(default=False)
	

	def __str__(self):
		return "Dog information for " + self.name