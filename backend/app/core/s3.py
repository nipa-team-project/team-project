import boto3


def s3_connection():
    try:
        client_s3 = boto3.client(
            's3',
            aws_access_key_id="AKIAWSPCCV22IWRDMNF2",
            aws_secret_access_key="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",
        )
    except Exception as e:
        print(e)
    else:
        print("s3 bucket connected!")
        return client_s3


