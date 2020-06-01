from selenium.webdriver.common.by import By
from selenium import webdriver

driver = webdriver.Firefox()

year=2019
driver.get('https://www.national-lottery.com/powerball/results-archive-'+str(year))

for row in range(1):
    for column in range(6):

        element = driver.find_element_by_xpath('//*[@id="content"]/table/tbody/tr['+str(row+1)+']/td[2]/span['+str(column)+']')

        print(element)