import numpy as np
import pandas as pd

dataset=pd.read_csv("/home/sharvi/Desktop/Project/dbms_sem5/ml/nut.csv")

X= dataset.iloc[:,2:9].values
y =dataset.iloc[:,-1].values

from sklearn.impute import SimpleImputer

imp = SimpleImputer(missing_values= np.nan, strategy='mean')

imp = imp.fit(X)
imp = imp.transform(X)

# print(imp)

from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(imp,y,test_size=0.1,random_state=0)

from sklearn.linear_model import LogisticRegression
classifier=LogisticRegression()
classifier.fit(X_train,y_train)

y_pred=classifier.predict(X_test)
print(np.concatenate((y_pred.reshape(len(y_pred),1),y_test.reshape(len(y_test),1)),1))

from sklearn.metrics import confusion_matrix,accuracy_score
cm=confusion_matrix(y_test,y_pred)
print(cm)
accuracy_score(y_test,y_pred)