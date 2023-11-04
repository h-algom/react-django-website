from django.db import models


# Create your models here.
class Auth(models.Model):
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=20)
    joined_on = models.DateTimeField(auto_now_add=True)


class Profile(models.Model):
    BUSY = 'busy'
    AVAILABLE = 'available'
    ASLEEP = 'asleep'

    STATUS_CHOICES = [
        (BUSY, 'Busy'),
        (AVAILABLE, 'Available'),
        (ASLEEP, 'Asleep'),
    ]

    username = models.CharField(max_length=15)
    biography = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default=AVAILABLE  # Set the default to "available"
    )
    auth = models.ForeignKey(Auth, on_delete=models.CASCADE)

    def email(self):
        return self.auth.email


class Files(models.Model):
    title = models.CharField(max_length=20)
    created_on = models.DateTimeField(auto_now_add=True)
