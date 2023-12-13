import threading
import time
digits = 5

print("==================================\n\nStarting Calculation...\n\n==================================")

collisions = 0
start_time = time.time()

m1 = 100
m2 = 1
v1 = -1
v2 = 0

def start():
    global m1
    m1 = 100 ** (digits - 1)
    collision()

def collision():
    global collisions, v1, v2

    if v1 > 0 and v2 > 0 and v1 > v2:
        print(f"{collisions}\n{(time.time() - start_time)} s")
        return

    ov1 = v1
    v1 = (((m1 - m2) * v1) + (2 * m2 * v2)) / (m1 + m2)
    v2 = ((2 * m1 * ov1) + (m2 - m1) * v2) / (m1 + m2)
    collisions += 1

    if v2 > 0:
        print(f"{collisions}\n{(time.time() - start_time)} s")
        return

    if v2 < v1 or (v1 > 0 and v2 > v1):
        collisions += 1
        v2 = v2 * -1
        threading.Timer(0, collision).start()

    if v1 < 0 and v2 < v1:
        threading.Timer(0, collision).start()

start()